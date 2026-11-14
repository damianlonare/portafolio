// Elige el video de /links con el RSS público de YouTube (sin API key).
//
// playlistId en content/music-video.config.json:
//   crea una playlist (por ejemplo "Música"), copia el id de list=... y pégalo.
//   El video más nuevo de esa playlist es el hero.
// Déjalo en "" para usar el canal y quedarte con el upload más nuevo cuyo
// título coincida con keywords (sin acentos, sin importar mayúsculas).
// overrideVideoId, si tiene un id de 11 caracteres, gana sobre el feed.
//
// Si el fetch falla, no se toca content/music-video.json (último video bueno).

import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const configPath = join(root, "content/music-video.config.json");
const outPath = join(root, "content/music-video.json");
const VIDEO_ID = /^[a-zA-Z0-9_-]{11}$/;

export function fold(value) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

export function isMusicTitle(title, keywords) {
  const folded = fold(title);
  return keywords.some((keyword) => {
    const needle = fold(keyword).trim();
    return needle.length > 0 && folded.includes(needle);
  });
}

function decodeXml(value) {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export function parseFeed(xml) {
  return xml
    .split("<entry>")
    .slice(1)
    .map((block) => {
      const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim() ?? "";
      const title = decodeXml(block.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
      const published = block.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
      return { id, title, published };
    })
    .filter((entry) => VIDEO_ID.test(entry.id))
    .sort((a, b) => b.published.localeCompare(a.published));
}

function selfTest() {
  const keywords = [
    "lyric",
    "letra",
    "video oficial",
    "official video",
    "official music video",
    "visualizer",
    "audio oficial",
    "videoclip",
  ];
  const cases = [
    ["Lonare - Noches Blancas [Letra / Lyric Video]", true],
    ["Vídeo Oficial", true],
    ["AUDIO OFICIAL", true],
    ["Official Music Video", true],
    ["something visualizer cut", true],
    ["videoclip nuevo", true],
    ["KATO - preguntas?", false],
    ["First Time Using FL Studio", false],
    ["Type Beat - Luz de noche", false],
    ["Premiere", false],
  ];
  for (const [title, expected] of cases) {
    if (isMusicTitle(title, keywords) !== expected) {
      throw new Error(`music keyword self-test failed for: ${title}`);
    }
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(10000),
    headers: {
      accept: "application/atom+xml, application/xml, text/xml, application/json",
      "user-agent": "damianlonare.com links (YouTube public RSS)",
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function readExisting() {
  try {
    const raw = await readFile(outPath, "utf8");
    const data = JSON.parse(raw);
    if (!data || typeof data.id !== "string" || !VIDEO_ID.test(data.id) || typeof data.title !== "string") return null;
    return data;
  } catch {
    return null;
  }
}

async function thumbnailFor(id) {
  const max = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  try {
    const response = await fetch(max, { method: "HEAD", signal: AbortSignal.timeout(8000) });
    if (response.ok) return max;
  } catch {
    // hqdefault exists for every public video.
  }
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

async function titleFor(id, previous) {
  try {
    const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`;
    const response = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { "user-agent": "damianlonare.com links (YouTube oEmbed)" },
    });
    if (!response.ok) throw new Error(String(response.status));
    const data = await response.json();
    if (typeof data.title === "string" && data.title.trim()) return data.title.trim();
  } catch {
    if (previous?.id === id && previous.title) return previous.title;
  }
  return previous?.id === id && previous.title ? previous.title : "YouTube";
}

async function pick(config, previous) {
  const override = String(config.overrideVideoId ?? "").trim();
  if (override) {
    if (!VIDEO_ID.test(override)) throw new Error("overrideVideoId must be an 11-character YouTube id");
    return {
      id: override,
      title: await titleFor(override, previous),
      source: "override",
      thumbnail: await thumbnailFor(override),
    };
  }

  const playlistId = String(config.playlistId ?? "").trim();
  if (playlistId) {
    const xml = await fetchText(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(playlistId)}`,
    );
    const newest = parseFeed(xml)[0];
    if (!newest) throw new Error("playlist feed has no videos");
    return {
      id: newest.id,
      title: newest.title,
      source: "playlist",
      thumbnail: await thumbnailFor(newest.id),
    };
  }

  const channelId = String(config.channelId ?? "").trim();
  if (!channelId) throw new Error("channelId is empty");
  const xml = await fetchText(
    `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`,
  );
  const keywords = Array.isArray(config.keywords) ? config.keywords : [];
  const match = parseFeed(xml).find((entry) => isMusicTitle(entry.title, keywords));
  if (!match) throw new Error("no channel video matched the music keywords");
  return {
    id: match.id,
    title: match.title,
    source: "channel",
    thumbnail: await thumbnailFor(match.id),
  };
}

export async function refreshMusicVideo() {
  selfTest();
  const config = JSON.parse(await readFile(configPath, "utf8"));
  const previous = await readExisting();
  try {
    const video = await pick(config, previous);
    const next = `${JSON.stringify(video, null, 2)}\n`;
    const prevRaw = previous ? `${JSON.stringify(previous, null, 2)}\n` : "";
    if (next !== prevRaw) await writeFile(outPath, next);
    console.log(`music video: ${video.id} — ${video.title} (${video.source})`);
    return video;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    if (previous) {
      console.warn(`music video fetch failed, keeping ${previous.id}: ${reason}`);
      return previous;
    }
    console.warn(`music video fetch failed and there is no snapshot: ${reason}`);
    return null;
  }
}

const calledDirectly = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (calledDirectly) {
  const video = await refreshMusicVideo();
  if (!video) process.exit(1);
}
