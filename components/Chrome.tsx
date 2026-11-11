import ThemeToggle from "@/components/ThemeToggle";
import { links, routes, ui, whatsappLink, type Lang, type PageKey } from "@/content/content";

export const ext = { target: "_blank", rel: "noreferrer" } as const;

export function Header({ lang, page }: { lang: Lang; page: PageKey }) {
  const t = ui[lang];
  const other: Lang = lang === "es" ? "en" : "es";
  const item = (key: PageKey, label: string) => (
    <a href={routes[key][lang]} aria-current={page === key ? "page" : undefined}>
      {label}
    </a>
  );
  return (
    <header className="topbar">
      <div className="wrap topbar-in">
        <a href={routes.home[lang]} className="brand">
          {t.brand}
        </a>
        <nav aria-label={t.navLabel} className="mainnav">
          {item("software", t.nav.software)}
          {item("hire", t.nav.hire)}
          <a href="#contacto">{t.nav.contact}</a>
        </nav>
        <div className="tools">
          <ThemeToggle labels={t.theme} />
          <a className="toolbtn" href={routes[page][other]} hrefLang={other} aria-label={t.switchLabel}>
            {t.switchLang}
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <span>{ui[lang].footer}</span>
        <span className="footer-links">
          <a href={links.linkedin} {...ext}>
            LinkedIn
          </a>
          <a href={links.github} {...ext}>
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}

export function ContactBand({
  title,
  body,
  primary,
  secondary,
  accent = false,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string }[];
  accent?: boolean;
}) {
  return (
    <section id="contacto" aria-labelledby="contacto-t" className="wrap band-wrap">
      <div className={accent ? "band accent" : "band"}>
        <div className="band-text">
          <h2 id="contacto-t">{title}</h2>
          <p>{body}</p>
        </div>
        <div className="btnrow">
          <a className="btn light" href={primary.href} {...ext}>
            {primary.label}
          </a>
          {secondary?.map((s) => (
            <a key={s.label} className="btn ghost-dark" href={s.href} {...ext}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function waHref(text: string) {
  return whatsappLink(text);
}

export function Icon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 32,
    height: 32,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "auto")
    return (
      <svg {...common}>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v5h-5" />
        <path d="M12 8v4l3 2" />
      </svg>
    );
  if (name === "brief")
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
