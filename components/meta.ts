import type { Metadata } from "next";
import { content, SITE_URL, type Lang } from "@/content/content";

export function buildMetadata(lang: Lang): Metadata {
  const c = content[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: c.path,
      languages: { es: "/", en: "/en/", "x-default": "/en/" },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: c.path,
      type: "website",
      locale: lang === "es" ? "es_MX" : "en_US",
    },
  };
}
