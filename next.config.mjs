import { refreshMusicVideo } from "./scripts/refresh-music-video.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

// Static export has no ISR. Refresh the featured video once per build, before
// pages read content/music-video.json. A failed fetch keeps the last snapshot.
const building = process.argv.includes("build");

export default async function config() {
  if (building && !globalThis.__musicVideoRefresh) {
    globalThis.__musicVideoRefresh = refreshMusicVideo();
  }
  if (globalThis.__musicVideoRefresh) await globalThis.__musicVideoRefresh;
  return nextConfig;
}
