import Waveform from "@/components/Waveform";
import { content, links, type Lang } from "@/content/content";

const ext = { target: "_blank", rel: "noreferrer" } as const;

export default function Site({ lang }: { lang: Lang }) {
  const c = content[lang];
  const cv = links.cv[lang];

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">
          DL<span>_</span>
        </a>
        <nav>
          <a href="#skills">{c.nav.skills}</a>
          <a href="#experience">{c.nav.experience}</a>
          <a href="#work">{c.nav.work}</a>
          <a href="#services">{c.nav.services}</a>
          <a href="#contact">{c.nav.contact}</a>
        </nav>
        <a className="lang" href={c.altPath} hrefLang={lang === "es" ? "en" : "es"} aria-label={c.switchLabel}>
          {c.switchLang}
        </a>
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
            <a className="btn primary" href="#contact">
              {c.hero.ctaPrimary}
            </a>
            {cv && (
              <a className="btn" href={cv} {...ext}>
                {c.hero.ctaCv}
              </a>
            )}
            <a className="btn" href={links.linkedin} {...ext}>
              {c.hero.ctaLinkedin}
            </a>
            <a className="btn" href={links.github} {...ext}>
              {c.hero.ctaGithub}
            </a>
          </div>
          <dl className="facts">
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <Waveform />
        </section>

        <section id="skills" className="section">
          <h2>
            <span className="num">01</span> {c.skills.title}
          </h2>
          <p className="intro">{c.skills.intro}</p>
          <div className="skillgrid">
            {c.skills.groups.map((g) => (
              <div key={g.title}>
                <h3>{g.title}</h3>
                <ul className="chips big">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>
            <span className="num">02</span> {c.experience.title}
          </h2>
          <ul className="timeline">
            {c.experience.items.map((e) => (
              <li key={e.what}>
                <span className="when">{e.when}</span>
                <div>
                  <strong>{e.what}</strong>
                  <span>{e.where}</span>
                  <ul className="points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="subhead">{c.experience.educationTitle}</h3>
          <ul className="timeline">
            {c.experience.education.map((e) => (
              <li key={e.what}>
                <span className="when">{e.when}</span>
                <div>
                  <strong>{e.what}</strong>
                  <span>{e.where}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="section">
          <h2>
            <span className="num">03</span> {c.work.title}
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
                  {p.result && (
                    <div className="result">
                      <dt>{c.work.labels.result}</dt>
                      <dd>{p.result}</dd>
                    </div>
                  )}
                </dl>
                <ul className="chips" aria-label={c.work.labels.stack}>
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {p.link && (
                  <a className="caselink" href={p.link} {...ext}>
                    {p.linkLabel} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <h2>
            <span className="num">04</span> {c.services.title}
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
          <p className="about">
            {c.about.text}
            {links.music && (
              <>
                {" "}
                <a href={links.music} {...ext}>
                  {c.about.link} →
                </a>
              </>
            )}
          </p>
        </section>

        <section id="contact" className="section contact">
          <h2>{c.contact.title}</h2>
          <p>{c.contact.body}</p>
          <div className="ctas">
            <a className="btn primary" href={links.linkedin} {...ext}>
              LinkedIn
            </a>
            <a className="btn" href={links.whatsapp} {...ext}>
              {c.contact.whatsapp}
            </a>
            {links.email && (
              <a className="btn" href={`mailto:${links.email}`}>
                {c.contact.email}
              </a>
            )}
            {cv && (
              <a className="btn" href={cv} {...ext}>
                {c.contact.cv}
              </a>
            )}
          </div>
          <div className="socials">
            <a href={links.github} {...ext}>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        {c.footer}{" "}
        <a href={links.repo} {...ext}>
          {c.footerRepo}
        </a>
      </footer>
    </>
  );
}
