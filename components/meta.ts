import type { Metadata } from "next";
import { meta, routes, SITE_URL, type Lang, type PageKey } from "@/content/content";

export function buildMetadata(lang: Lang, page: PageKey): Metadata {
  const m = meta[page][lang];
  const path = routes[page][lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: { es: routes[page].es, en: routes[page].en, "x-default": routes[page].es },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: path,
      type: "website",
      locale: lang === "es" ? "es_MX" : "en_US",
    },
  };
}
