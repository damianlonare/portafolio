import { ContactBand, Footer, Header, Icon, ext, waHref } from "@/components/Chrome";
import { clients, demos, hire, home, links, routes, software, ui, type Lang } from "@/content/content";

function Demos({ lang, soft = false }: { lang: Lang; soft?: boolean }) {
  const c = demos[lang];
  const body = (
    <>
      <h2 id="demos-t" className="h2">
        {c.title}
      </h2>
      <p className="sub">{c.sub}</p>
      <div className="row">
        {c.items.map((d) => (
          <article key={d.id} id={d.id} className="card outline demo">
            <a className="demo-shot" href={d.live} {...ext} aria-label={`${c.live}: ${d.title}`}>
              <img src={d.img} alt={d.alt} width={1200} height={750} loading="lazy" />
            </a>
            <span className="tag">{d.tag}</span>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
            <ul className="chips">
              {d.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="btnrow demo-actions">
              <a className="btn primary" href={d.live} {...ext}>
                {c.live} ↗
              </a>
              <a className="btn" href={d.code} {...ext}>
                {c.code}
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
  return soft ? (
    <section id="demos" aria-labelledby="demos-t" className="soft">
      <div className="wrap section-in">{body}</div>
    </section>
  ) : (
    <section id="demos" aria-labelledby="demos-t" className="wrap section">
      {body}
    </section>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const c = home[lang];
  return (
    <>
      <Header lang={lang} page="home" />
      <main>
        <section className="wrap hero hero-split">
          <div className="hero-text">
            <p className="kicker">{c.kicker}</p>
            <h1>
              {c.title[0]}
              <br />
              {c.title[1]}
            </h1>
            <p className="lead">{c.sub}</p>
          </div>
          <img className="photo big" src={links.photo} alt={c.photoAlt} width={240} height={240} />
        </section>

        <section aria-labelledby="doors-t" className="wrap section-tight">
          <h2 id="doors-t" className="h2">
            {c.doorsTitle}
          </h2>
          <div className="row">
            {c.doors.map((d, i) => (
              <a key={d.title} href={routes[d.to][lang] + d.hash} className={i === 2 ? "door alt" : "door"}>
                <span className="door-icon">
                  <Icon name={d.icon} />
                </span>
                <span className="door-title">{d.title}</span>
                <span className="door-body">{d.body}</span>
                <span className="door-note">{d.note}</span>
                <span className="door-cta">{d.cta} →</span>
              </a>
            ))}
          </div>
        </section>

        <section aria-label={c.clientsLabel} className="strip">
          <div className="wrap strip-in">
            <p>{c.clientsLabel}</p>
            <ul>
              {clients.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="como-t" className="wrap section">
          <h2 id="como-t" className="h2">
            {c.processTitle}
          </h2>
          <p className="sub">{c.processSub}</p>
          <ol className="steps">
            {c.process.map((s, i) => (
              <li key={s.title}>
                <span className="step-n">
                  {c.stepLabel} {i + 1}
                </span>
                <strong>{s.title}</strong>
                <span>{s.body}</span>
              </li>
            ))}
          </ol>
        </section>

        <ContactBand
          title={c.contactTitle}
          body={c.contactBody}
          primary={{ label: ui[lang].whatsapp, href: waHref(c.whatsappText) }}
          secondary={links.email ? [{ label: links.email, href: `mailto:${links.email}` }] : undefined}
        />
      </main>
      <Footer lang={lang} />
    </>
  );
}

export function SoftwarePage({ lang }: { lang: Lang }) {
  const c = software[lang];
  const quote = waHref(c.whatsappText);
  return (
    <>
      <Header lang={lang} page="software" />
      <main>
        <section className="wrap hero">
          <p className="kicker">{c.kicker}</p>
          <h1 className="narrow">{c.title}</h1>
          <p className="lead">{c.sub}</p>
          <div className="btnrow">
            <a className="btn primary" href={quote} {...ext}>
              {c.ctaPrimary}
            </a>
            <a className="btn" href="#proyectos">
              {c.ctaSecondary}
            </a>
          </div>
        </section>

        <section aria-labelledby="precios-t" className="soft">
          <div className="wrap section-in">
            <div className="titlerow">
              <h2 id="precios-t" className="h2">
                {c.pricesTitle}
              </h2>
              <span className="pill">{c.pricesPill}</span>
            </div>
            <div className="row">
              {c.services.map((s) => (
                <article key={s.title} id={s.id || undefined} className="card">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <p className="price">
                    {s.from && <>{c.from} </>}
                    <strong className={s.from || s.price.startsWith("$") ? "big" : ""}>{s.price}</strong> {s.unit}
                  </p>
                </article>
              ))}
              <article className="card dark">
                <h3>{c.includesTitle}</h3>
                <ul>
                  {c.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="proyectos" aria-labelledby="proyectos-t" className="wrap section">
          <h2 id="proyectos-t" className="h2">
            {c.workTitle}
          </h2>
          <p className="sub">{c.workSub}</p>
          <div className="row">
            {c.work.map((w) => (
              <article key={w.title} className="card outline">
                <span className="tag">{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </section>

        <Demos lang={lang} soft />

        <section aria-labelledby="faq-t" className="wrap section">
          <h2 id="faq-t" className="h2">
            {c.faqTitle}
          </h2>
          <div className="faq">
            {c.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <ContactBand title={c.contactTitle} body={c.contactBody} primary={{ label: c.contactCta, href: quote }} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

export function HirePage({ lang }: { lang: Lang }) {
  const c = hire[lang];
  const cv = links.cv[lang];
  const contactSecondary = [{ label: "LinkedIn", href: links.linkedin }];
  return (
    <>
      <Header lang={lang} page="hire" />
      <main>
        <section className="wrap hero hero-hire">
          <img className="photo" src={links.photo} alt={c.photoAlt} width={160} height={160} />
          <div className="hero-text">
            <p className="kicker">{c.kicker}</p>
            <h1 className="name">{c.name}</h1>
            <p className="role">{c.role}</p>
            <p className="lead">{c.sub}</p>
            <div className="btnrow">
              <a className="btn primary" href={cv} download {...ext}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                </svg>
                {c.cv}
              </a>
              <a className="btn" href={links.linkedin} {...ext}>
                LinkedIn
              </a>
              {links.email && (
                <a className="btn" href={`mailto:${links.email}`}>
                  {c.email}
                </a>
              )}
            </div>
          </div>
        </section>

        <section aria-labelledby="glance-t" className="wrap section-tight">
          <div className="glance">
            <h2 id="glance-t">{c.glanceTitle}</h2>
            <dl>
              {c.glance.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="skills-t" className="wrap section-bottom">
          <h2 id="skills-t" className="h2">
            {c.skillsTitle}
          </h2>
          <p className="sub">{c.skillsSub}</p>
          <div className="row">
            {c.skills.map((g) => (
              <div key={g.title} className="card outline">
                <h3>{g.title}</h3>
                <p>{g.body}</p>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="exp-t" className="soft">
          <div className="wrap section-in">
            <h2 id="exp-t" className="h2 spaced">
              {c.expTitle}
            </h2>
            <ol className="jobs">
              {c.exp.map((e) => (
                <li key={e.what}>
                  <span className="when">{e.when}</span>
                  <div>
                    <strong>{e.what}</strong>
                    {e.where && <span className="where">{e.where}</span>}
                    <p>{e.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a className="more" href={cv} download {...ext}>
              {c.expMore} →
            </a>
          </div>
        </section>

        <section aria-labelledby="work-t" className="wrap section">
          <h2 id="work-t" className="h2 spaced">
            {c.workTitle}
          </h2>
          <div className="row">
            {c.work.map((w) => (
              <article key={w.title} className="card outline">
                <span className="tag">{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </section>

        <Demos lang={lang} soft />

        <ContactBand
          title={c.contactTitle}
          body={c.contactBody}
          primary={links.email ? { label: c.email, href: `mailto:${links.email}` } : { label: "LinkedIn", href: links.linkedin }}
          secondary={
            links.email
              ? contactSecondary
              : [{ label: ui[lang].whatsapp, href: waHref(c.whatsappText) }]
          }
        />
      </main>
      <Footer lang={lang} />
    </>
  );
}
