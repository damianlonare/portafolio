// Todo el texto del sitio vive aquí, en español e inglés.
// Edita este archivo y no tienes que tocar componentes.

export type Lang = "es" | "en";

export const SITE_URL = "https://damianlonare.com";

// Deja en "" lo que todavía no tengas: el sitio oculta ese botón o link.
export const links = {
  email: "",
  whatsapp: "https://wa.me/528123524173",
  linkedin: "https://www.linkedin.com/in/pedro-damian-l-290586159",
  github: "https://github.com/damianlonare",
  repo: "https://github.com/damianlonare/portafolio",
  cv: { es: "/cv/Damian-Longoria-CV.pdf", en: "/cv/Damian-Longoria-Resume.pdf" },
  photo: "/damian.jpg",
  music: "", // canal o perfil de Lonare
};

type Case = {
  tag: string;
  title: string;
  problem: string;
  role: string;
  result?: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
};

export type Content = {
  path: string;
  altPath: string;
  switchLang: string;
  switchLabel: string;
  theme: { toLight: string; toDark: string };
  meta: { title: string; description: string };
  nav: { skills: string; experience: string; work: string; services: string; contact: string };
  hero: {
    status: string;
    kicker: string;
    name: string;
    photoAlt: string;
    title: string;
    sub: string;
    ctaPrimary: string;
    ctaCv: string;
    ctaLinkedin: string;
    ctaGithub: string;
    facts: { label: string; value: string }[];
  };
  skills: { title: string; intro: string; groups: { title: string; items: string[] }[] };
  experience: {
    title: string;
    items: { when: string; what: string; where: string; points: string[] }[];
    educationTitle: string;
    education: { when: string; what: string; where: string }[];
  };
  work: {
    title: string;
    intro: string;
    labels: { problem: string; role: string; result: string; stack: string };
    items: Case[];
  };
  services: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    processTitle: string;
    process: { title: string; body: string }[];
  };
  about: { text: string; link: string };
  contact: { title: string; body: string; whatsapp: string; email: string; cv: string };
  footer: string;
  footerRepo: string;
};

export const content: Record<Lang, Content> = {
  es: {
    path: "/",
    altPath: "/en/",
    switchLang: "EN",
    switchLabel: "Read in English",
    theme: { toLight: "Cambiar a tema claro", toDark: "Cambiar a tema oscuro" },
    meta: {
      title: "Damian Longoria · Senior Frontend Engineer (React / TypeScript)",
      description:
        "Senior Frontend Engineer con más de 9 años en React y TypeScript. Experimentación A/B para The Home Depot. Remoto desde Monterrey, México.",
    },
    nav: { skills: "Stack", experience: "Experiencia", work: "Proyectos", services: "Servicios", contact: "Contacto" },
    hero: {
      status: "Disponible para roles remotos y proyectos freelance",
      kicker: "Senior Frontend Engineer · React / Vue / TypeScript",
      name: "Damian Longoria",
      photoAlt: "Foto de Damian Longoria",
      title: "Construyo interfaces en React para productos con mucho tráfico.",
      sub: "Más de 9 años construyendo plataformas web para clientes como The Home Depot, AB InBev (Grupo Modelo), AMIB y Fundación BBVA. Lo más reciente: el sistema de pruebas A/B de homedepot.com, en un equipo que trabaja 100% en inglés.",
      ctaPrimary: "Contactar",
      ctaCv: "Descargar CV",
      ctaLinkedin: "LinkedIn",
      ctaGithub: "GitHub",
      facts: [
        { label: "Experiencia", value: "9+ años en desarrollo web" },
        { label: "Enfoque", value: "React · TypeScript · Next.js" },
        { label: "Idiomas", value: "Español nativo · Inglés profesional" },
        { label: "Ubicación", value: "Monterrey, México · UTC−6" },
        { label: "Modalidad", value: "Remoto · híbrido en Monterrey" },
      ],
    },
    skills: {
      title: "Stack",
      intro: "Lo que uso en el trabajo, agrupado por qué tanto lo domino.",
      groups: [
        { title: "Día a día", items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS"] },
        { title: "También trabajo con", items: ["Vue 3", "Angular", "Node.js", "AWS Lambda", "GraphQL", "Python"] },
        { title: "Experimentación y calidad", items: ["Adobe Target", "Akamai EdgeWorkers", "Contentful", "Jest", "React Testing Library"] },
        { title: "Visual y video", items: ["Remotion", "Three.js", "Canvas", "FFmpeg"] },
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          when: "Nov 2025 – Nov 2026",
          what: "Senior React Engineer",
          where: "Dexian · asignado a The Home Depot (EE. UU.) · remoto, 100% en inglés",
          points: [
            "Construí y mantuve el sistema de experimentación con Akamai EdgeWorkers y Adobe Target con el que otros equipos de producto corrían pruebas A/B en homedepot.com.",
            "Entregué experimentos sobre ubicación de productos, anuncios de Google, layouts y orden de resultados de búsqueda para ver qué opciones vendían más.",
            "Llevé los lanzamientos de principio a fin con el proceso de RFC de Home Depot, validando en staging, beta y producción.",
          ],
        },
        {
          when: "Sep 2020 – Oct 2025",
          what: "Desarrollador Frontend y Backend",
          where: "Sngular · clientes: Grupo Modelo (AB InBev), AMIB, Fundación BBVA",
          points: [
            "Grupo Modelo: procesador de pagos en React para las tiendas Modelorama, frontend con Gatsby, TypeScript, Redux y GraphQL, y una librería de componentes sobre Ant Design.",
            "Microservicios serverless en Node.js con AWS Lambda, SNS/SQS y DynamoDB; pruebas con Jest y React Testing Library.",
            "AMIB: frontend en Angular y API en Node.js para pagos de certificaciones. Fundación BBVA: frontend en Vue 3 y Pinia.",
          ],
        },
        {
          when: "Jun 2019 – Jul 2020",
          what: "Desarrollador Full-Stack",
          where: "FDI Connect",
          points: ["Plataforma de e-commerce B2B con Vue, PHP/Symfony y MySQL: inventario, tiendas por proveedor, cupones y pagos con Conekta."],
        },
        {
          when: "May 2017 – Jun 2019",
          what: "Desarrollador Frontend",
          where: "Foodi",
          points: ["Frontend en React/Redux de un marketplace con múltiples vendedores, más una app móvil en Ionic."],
        },
      ],
      educationTitle: "Formación",
      education: [
        { when: "En curso", what: "Ingeniería en Desarrollo de Software", where: "Universidad Ciudadana de Nuevo León" },
        { when: "Carreras técnicas", what: "Desarrollo de Software · Paquetería Computacional", where: "UANL · FIME" },
      ],
    },
    work: {
      title: "Proyectos",
      intro: "Pocos, pero contados completos: el reto y lo que hice.",
      labels: { problem: "El reto", role: "Mi parte", result: "Resultado", stack: "Stack" },
      items: [
        {
          tag: "The Home Depot · 2025–2026",
          title: "Experimentación A/B en The Home Depot",
          problem:
            "El equipo de Experimentation necesitaba lanzar y medir variantes de la interfaz en un sitio de altísimo tráfico, sin afectar el rendimiento ni la experiencia de compra.",
          role:
            "Construí las variantes en React, las serví desde el edge con Akamai EdgeWorkers y las configuré y medí con Adobe Target. Contenido manejado con Contentful.",
          stack: ["React", "TypeScript", "Adobe Target", "Akamai EdgeWorkers", "Contentful"],
        },
        {
          tag: "Proyecto propio · 2026",
          title: "Motor de video programático para música",
          problem:
            "Hacer un Reel o un lyric video por canción a mano se lleva horas. Quería un sistema que tome la canción y saque videos listos para publicar, sincronizados con el ritmo.",
          role:
            "Lo diseñé y programé completo: plantillas en React con Remotion, análisis de audio para detectar beats y secciones, y un pipeline con FFmpeg que entrega versiones para YouTube, Reels y Spotify.",
          result: "Un motor reutilizable: cada canción nueva es un archivo de configuración, no código nuevo.",
          stack: ["React", "Remotion", "TypeScript", "FFmpeg", "Python"],
        },
        {
          tag: "Este sitio · 2026",
          title: "damianlonare.com",
          problem: "Un portafolio rápido, bilingüe y fácil de mantener, sin depender de un servidor.",
          role:
            "Next.js con exportación estática, una ruta por idioma con su propio metadata, todo el contenido tipado en un solo archivo y una animación en Canvas que reacciona al cursor. Desplegado en Cloudflare Pages.",
          stack: ["Next.js", "TypeScript", "Canvas", "Cloudflare Pages"],
          link: links.repo,
          linkLabel: "Ver el código",
        },
      ],
    },
    services: {
      title: "Servicios freelance",
      intro: "También tomo proyectos directos con negocios o como parte del equipo de una agencia.",
      items: [
        {
          title: "Frontend por proyecto",
          body: "Me sumo a tu equipo o agencia para construir o mejorar apps en React, Next.js o Vue. Código limpio, tipado y fácil de mantener.",
        },
        {
          title: "Sitios y landing pages",
          body: "Sitios rápidos, que se ven bien en celular y con SEO básico listo. En Next.js o WordPress, según lo que te convenga mantener.",
        },
        {
          title: "Video programático",
          body: "Plantillas y generadores de video con Remotion y FFmpeg: Reels automáticos, visualizers, videos a partir de datos o guiones.",
        },
      ],
      processTitle: "Cómo trabajo",
      process: [
        { title: "Platicamos", body: "Una llamada corta para entender qué necesitas y para cuándo." },
        { title: "Propuesta", body: "Alcance claro y precio fijo o por hora. Sin sorpresas." },
        { title: "Avances", body: "Te paso un link de preview cada semana para que veas cómo va." },
        { title: "Entrega", body: "Código, documentación y una ronda de ajustes incluida." },
      ],
    },
    about: {
      text: "Fuera del código produzco música como Lonare. Por eso me late tanto lo visual y lo que se mueve: muchos de mis experimentos con video empiezan con una canción mía.",
      link: "Escuchar Lonare",
    },
    contact: {
      title: "¿Hablamos?",
      body: "Para una vacante o un proyecto: escríbeme y te respondo en menos de 24 horas.",
      whatsapp: "WhatsApp",
      email: "Correo",
      cv: "Descargar CV",
    },
    footer: "Hecho con Next.js y TypeScript por mí. Monterrey, México.",
    footerRepo: "Código en GitHub",
  },

  en: {
    path: "/en/",
    altPath: "/",
    switchLang: "ES",
    switchLabel: "Leer en español",
    theme: { toLight: "Switch to light theme", toDark: "Switch to dark theme" },
    meta: {
      title: "Damian Longoria · Senior Frontend Engineer (React / TypeScript)",
      description:
        "Senior Frontend Engineer with 9+ years in React and TypeScript. A/B experimentation for The Home Depot. Remote from Monterrey, Mexico (UTC−6).",
    },
    nav: { skills: "Stack", experience: "Experience", work: "Work", services: "Services", contact: "Contact" },
    hero: {
      status: "Open to remote roles and freelance projects",
      kicker: "Senior Frontend Engineer · React / Vue / TypeScript",
      name: "Damian Longoria",
      photoAlt: "Photo of Damian Longoria",
      title: "I build React interfaces for high-traffic products.",
      sub: "9+ years building web platforms for clients like The Home Depot, AB InBev (Grupo Modelo), AMIB and Fundación BBVA. Most recently: the A/B testing system behind homedepot.com, on a team that works fully in English.",
      ctaPrimary: "Get in touch",
      ctaCv: "Download résumé",
      ctaLinkedin: "LinkedIn",
      ctaGithub: "GitHub",
      facts: [
        { label: "Experience", value: "9+ years in web development" },
        { label: "Focus", value: "React · TypeScript · Next.js" },
        { label: "Languages", value: "Professional English · Native Spanish" },
        { label: "Location", value: "Monterrey, Mexico · UTC−6 (US Central)" },
        { label: "Work mode", value: "Remote" },
      ],
    },
    skills: {
      title: "Stack",
      intro: "What I use at work, grouped by how deep I go.",
      groups: [
        { title: "Day to day", items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS"] },
        { title: "Also work with", items: ["Vue 3", "Angular", "Node.js", "AWS Lambda", "GraphQL", "Python"] },
        { title: "Experimentation & quality", items: ["Adobe Target", "Akamai EdgeWorkers", "Contentful", "Jest", "React Testing Library"] },
        { title: "Visual & video", items: ["Remotion", "Three.js", "Canvas", "FFmpeg"] },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          when: "Nov 2025 – Nov 2026",
          what: "Senior React Engineer",
          where: "Dexian · assigned to The Home Depot (USA) · remote, 100% English",
          points: [
            "Built and maintained the experimentation system on Akamai EdgeWorkers and Adobe Target that other product teams used to run A/B tests on homedepot.com.",
            "Delivered experiments on product placement, Google ads, layouts and search-result rankings to see which options sold more.",
            "Owned releases end to end through Home Depot's RFC process, validating across staging, beta and production.",
          ],
        },
        {
          when: "Sep 2020 – Oct 2025",
          what: "Frontend & Backend Developer",
          where: "Sngular · clients: Grupo Modelo (AB InBev), AMIB, Fundación BBVA",
          points: [
            "Grupo Modelo: a React payment processor for Modelorama stores, a frontend in Gatsby, TypeScript, Redux and GraphQL, and a component library on Ant Design.",
            "Node.js serverless microservices with AWS Lambda, SNS/SQS and DynamoDB; testing with Jest and React Testing Library.",
            "AMIB: Angular frontend and Node.js API for certification payments. Fundación BBVA: frontend in Vue 3 and Pinia.",
          ],
        },
        {
          when: "Jun 2019 – Jul 2020",
          what: "Full-Stack Developer",
          where: "FDI Connect",
          points: ["B2B e-commerce platform in Vue, PHP/Symfony and MySQL: inventory, per-supplier storefronts, coupons and Conekta payments."],
        },
        {
          when: "May 2017 – Jun 2019",
          what: "Frontend Developer",
          where: "Foodi",
          points: ["React/Redux frontend for a multi-vendor marketplace, plus an Ionic mobile app."],
        },
      ],
      educationTitle: "Education",
      education: [
        { when: "In progress", what: "B.Eng. Software Development", where: "Universidad Ciudadana de Nuevo León" },
        { when: "Technical degrees", what: "Software Development · Computer Applications", where: "UANL · FIME" },
      ],
    },
    work: {
      title: "Selected work",
      intro: "A few projects, told in full: the challenge and what I did.",
      labels: { problem: "Challenge", role: "My part", result: "Outcome", stack: "Stack" },
      items: [
        {
          tag: "The Home Depot · 2025–2026",
          title: "A/B experimentation at The Home Depot",
          problem:
            "The Experimentation team needed to ship and measure UI variants on a very high-traffic site without hurting performance or the shopping experience.",
          role:
            "I built the variants in React, served them at the edge with Akamai EdgeWorkers, and set up and measured them in Adobe Target. Content managed in Contentful.",
          stack: ["React", "TypeScript", "Adobe Target", "Akamai EdgeWorkers", "Contentful"],
        },
        {
          tag: "Own project · 2026",
          title: "Programmatic video engine for music",
          problem:
            "Making a Reel or lyric video by hand for every song takes hours. I wanted a system that takes a song and outputs ready-to-post videos synced to the beat.",
          role:
            "Designed and built it end to end: React templates with Remotion, audio analysis to detect beats and sections, and an FFmpeg pipeline that delivers versions for YouTube, Reels and Spotify.",
          result: "A reusable engine: each new song is a config file, not new code.",
          stack: ["React", "Remotion", "TypeScript", "FFmpeg", "Python"],
        },
        {
          tag: "This site · 2026",
          title: "damianlonare.com",
          problem: "A fast, bilingual portfolio that's easy to maintain and needs no server.",
          role:
            "Next.js with static export, one route per language with its own metadata, all content typed in a single file, and a Canvas animation that reacts to the cursor. Deployed on Cloudflare Pages.",
          stack: ["Next.js", "TypeScript", "Canvas", "Cloudflare Pages"],
          link: links.repo,
          linkLabel: "View the code",
        },
      ],
    },
    services: {
      title: "Freelance services",
      intro: "I also take on projects directly with businesses or as part of an agency team.",
      items: [
        {
          title: "Frontend contracting",
          body: "I join your team or agency to build or improve React, Next.js or Vue apps. Clean, typed, maintainable code.",
        },
        {
          title: "Websites & landing pages",
          body: "Fast, mobile-first sites with basic SEO in place. Built in Next.js or WordPress, depending on what you want to maintain.",
        },
        {
          title: "Programmatic video",
          body: "Video templates and generators with Remotion and FFmpeg: automated Reels, visualizers, videos from data or scripts.",
        },
      ],
      processTitle: "How I work",
      process: [
        { title: "Talk", body: "A short call to understand what you need and when." },
        { title: "Proposal", body: "Clear scope, fixed or hourly price. No surprises." },
        { title: "Progress", body: "A preview link every week so you can see where it's at." },
        { title: "Delivery", body: "Code, docs and one round of tweaks included." },
      ],
    },
    about: {
      text: "Outside of code I make music as Lonare. That's why I'm into visual, moving things: a lot of my video experiments start with one of my songs.",
      link: "Listen to Lonare",
    },
    contact: {
      title: "Let's talk",
      body: "For a role or a project: message me and I'll get back to you within 24 hours.",
      whatsapp: "WhatsApp",
      email: "Email",
      cv: "Download résumé",
    },
    footer: "Built with Next.js and TypeScript by me. Monterrey, Mexico.",
    footerRepo: "Source on GitHub",
  },
};
