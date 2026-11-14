// Botones de /links. Para agregar o quitar uno, edita este arreglo.
// El video de arriba sale de content/music-video.config.json
// (playlistId, overrideVideoId y keywords). El último video elegido queda en
// content/music-video.json por si YouTube no responde en el siguiente build.

export const LINKS_PATH = "/links/";

export type LinkIconName =
  | "site"
  | "github"
  | "spotify"
  | "youtube"
  | "instagram"
  | "tiktok"
  | "threads"
  | "x";

export type LinkItem = {
  label: string;
  href: string;
  icon: LinkIconName;
};

export type LinkGroup = {
  id: string;
  title: string;
  links: LinkItem[];
};

export const linkPage = {
  name: "Damian Longoria",
  tagline: "desarrollador web y músico · Monterrey",
  photo: "/damian.jpg",
  photoAlt: "Foto de Damian Longoria",
  title: "Damian Longoria · links",
  description: "Desarrollador web y músico en Monterrey. Sitio, GitHub, Lonare y Prod By Lonare.",
  groups: [
    {
      id: "desarrollo",
      title: "Desarrollo",
      links: [
        { label: "Sitio / servicios", href: "/", icon: "site" },
        { label: "GitHub", href: "https://github.com/damianlonare", icon: "github" },
      ],
    },
    {
      id: "lonare",
      title: "Lonare (música)",
      links: [
        { label: "Spotify", href: "https://open.spotify.com/artist/3EQvBlLuI3dCU5aU3wLvGU", icon: "spotify" },
        { label: "YouTube", href: "https://www.youtube.com/@damianlonare", icon: "youtube" },
        { label: "Instagram", href: "https://www.instagram.com/damianlonare", icon: "instagram" },
      ],
    },
    {
      id: "prod",
      title: "Prod By Lonare (productor)",
      links: [
        { label: "Spotify", href: "https://open.spotify.com/artist/2cnus0qwJ3zSvdoKeKfpJC", icon: "spotify" },
        { label: "YouTube", href: "https://www.youtube.com/@ProdByLonare", icon: "youtube" },
        { label: "Instagram", href: "https://www.instagram.com/prodbylonare", icon: "instagram" },
        { label: "TikTok", href: "https://www.tiktok.com/@prodbylonare", icon: "tiktok" },
        { label: "Threads", href: "https://www.threads.net/@prodbylonare", icon: "threads" },
        { label: "X", href: "https://x.com/prodbylonare", icon: "x" },
      ],
    },
  ] satisfies LinkGroup[],
};
