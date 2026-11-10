"use client";

import { useEffect, useState } from "react";
import Waveform from "@/components/Waveform";
import { content, links, type Lang } from "@/content/content";

const isPlaceholder = (s: string | null) => !s || s.startsWith("[");

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const c = content[lang];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "es") setLang(saved);
      else if (navigator.language && !navigator.language.startsWith("es")) setLang("en");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">
          DL<span>_</span>
        </a>
        <nav>
          <a href="#work">{c.nav.work}</a>
          <a href="#services">{c.nav.services}</a>
          <a href="#experience">{c.nav.experience}</a>
          <a href="#contact">{c.nav.contact}</a>
        </nav>
        <button className="lang" onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label="Change language">
          {c.switchLang}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <p className="status">
            <span className="dot" /> {c.hero.status}
          </p>
          <p className="kicker">{c.hero.kicker}</p>
          <h1>{c.hero.title}</h1>
          <p className="name">{c.hero.name}</p>
          <p className="sub">{c.hero.sub}</p>
          <div className="ctas">
            <a className="btn primary" href="#work">
              {c.hero.ctaPrimary}
            </a>
            <a className="btn" href="#contact">
              {c.hero.ctaSecondary}
            </a>
          </div>
          <Waveform />
        </section>

        <section id="work" className="section">
          <h2>
            <span className="num">01</span> {c.work.title}
          </h2>
          <p className="intro">{c.work.intro}</p>
          <div className="cases">
            {c.work.items.map((p) => (
              <article className="case" key={p.title}>
                <p className="tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <dl>
                  <div>
                    <dt>{c.work.labels.problem}</dt>
                    <dd>{p.problem}</dd>
                  </div>
                  <div>
                    <dt>{c.work.labels.role}</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div className="result">
                    <dt>{c.work.labels.result}</dt>
                    <dd>{p.result}</dd>
                  </div>
                </dl>
                <ul className="chips" aria-label={c.work.labels.stack}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {p.link && (
                  <a className="caselink" href={isPlaceholder(p.link) ? "#" : p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <h2>
            <span className="num">02</span> {c.services.title}
          </h2>
          <p className="intro">{c.services.intro}</p>
          <div className="grid3">
            {c.services.items.map((s, i) => (
              <div className="card" key={s.title}>
                <span className="cardnum">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <h3 className="subhead">{c.services.processTitle}</h3>
          <ol className="process">
            {c.services.process.map((s) => (
              <li key={s.title}>
                <strong>{s.title}</strong>
                <span>{s.body}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience" className="section">
          <h2>
            <span className="num">03</span> {c.experience.title}
          </h2>
          <ul className="timeline">
            {c.experience.items.map((e) => (
              <li key={e.what}>
                <span className="when">{e.when}</span>
                <div>
                  <strong>{e.what}</strong>
                  <span>{e.where}</span>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="subhead">{c.experience.stackTitle}</h3>
          <ul className="chips big">
            {c.experience.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="about">
            {c.experience.about}{" "}
            <a href={isPlaceholder(links.youtube) ? "#" : links.youtube} target="_blank" rel="noreferrer">
              {c.experience.aboutLink} →
            </a>
          </p>
        </section>

        <section id="contact" className="section contact">
          <h2>{c.contact.title}</h2>
          <p>{c.contact.body}</p>
          <div className="ctas">
            <a className="btn primary" href={`mailto:${links.email}`}>
              {c.contact.email}
            </a>
            <a className="btn" href={links.cv}>
              {c.contact.cv}
            </a>
          </div>
          <div className="socials">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">{c.footer}</footer>
    </>
  );
}
