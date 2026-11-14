import type { Metadata } from "next";
import { LinkIcon } from "@/components/LinkIcon";
import { MusicHero } from "@/components/MusicHero";
import { ext } from "@/components/Chrome";
import { SITE_URL } from "@/content/content";
import { LINKS_PATH, linkPage } from "@/content/link-page";
import featuredVideo from "@/content/music-video.json";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: linkPage.title,
  description: linkPage.description,
  alternates: { canonical: LINKS_PATH },
  openGraph: {
    title: linkPage.title,
    description: linkPage.description,
    url: LINKS_PATH,
    type: "website",
    locale: "es_MX",
    images: [{ url: linkPage.photo, alt: linkPage.photoAlt }],
  },
  twitter: {
    card: "summary",
    title: linkPage.title,
    description: linkPage.description,
    images: [linkPage.photo],
  },
};

function external(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function LinksPage() {
  return (
    <div className="links-page">
      <main className="links-main">
        <MusicHero video={featuredVideo} />
        <header className="links-head">
          <img className="photo" src={linkPage.photo} alt={linkPage.photoAlt} width={96} height={96} />
          <h1>{linkPage.name}</h1>
          <p className="links-tag">{linkPage.tagline}</p>
        </header>

        {linkPage.groups.map((group) => (
          <section key={group.id} className="link-group" aria-labelledby={`links-${group.id}`}>
            <h2 id={`links-${group.id}`}>{group.title}</h2>
            <ul className="link-list">
              {group.links.map((item) => {
                const outside = external(item.href);
                const name = outside
                  ? `${group.title}: ${item.label} (se abre en una pestaña nueva)`
                  : `${group.title}: ${item.label}`;
                return (
                  <li key={item.href}>
                    <a className="linkbtn" href={item.href} aria-label={name} {...(outside ? ext : {})}>
                      <LinkIcon name={item.icon} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
