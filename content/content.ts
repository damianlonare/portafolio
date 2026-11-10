// Todo el texto del sitio vive aquí. Edita este archivo y no tienes que tocar componentes.
// Busca "[" para encontrar los datos que faltan por llenar (métricas, links, correo).

export type Lang = "es" | "en";

export const links = {
  email: "[tu-correo-profesional@dominio.com]",
  linkedin: "https://www.linkedin.com/in/[tu-usuario]",
  github: "https://github.com/damianlonare",
  youtube: "https://www.youtube.com/@[lonare]",
  cv: "#", // pon aquí el link a tu CV en PDF
};

export const content = {
  es: {
    nav: { work: "Proyectos", services: "Servicios", experience: "Experiencia", contact: "Contacto" },
    hero: {
      kicker: "Frontend Engineer · React / TypeScript",
      name: "Damian Longoria",
      title: "Hago interfaces web que se sienten bien y video que se genera solo.",
      sub: "Más de 6 años en React. Lo más reciente: experimentación A/B para el e-commerce de un retailer de EE.UU. con millones de visitas. En paralelo construyo herramientas de video programático con Remotion.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      status: "Disponible para proyectos freelance y roles remotos",
    },
    work: {
      title: "Proyectos",
      intro: "Pocos, pero contados completos: el problema, lo que hice y qué cambió.",
      labels: { problem: "El reto", role: "Mi parte", result: "Resultado", stack: "Stack" },
      items: [
        {
          tag: "Empresa · 2025–2026",
          title: "Experimentación A/B para un retailer Fortune 500",
          problem:
            "El equipo de Experimentation necesitaba lanzar y medir variantes de la interfaz en un sitio de altísimo tráfico, sin pegarle al rendimiento ni a la experiencia de compra.",
          role:
            "Sr React Engineer dentro del equipo en EE.UU., trabajando 100% en inglés. Construí las variantes en React, las serví desde el edge con Akamai EdgeWorkers y las configuré y medí con Adobe Target. Contenido manejado con Contentful.",
          result: "[XX] experimentos lanzados · [métrica de impacto, p. ej. +X% conversión en una prueba o tiempo de salida reducido de X a Y]",
          stack: ["React", "TypeScript", "Adobe Target", "Akamai EdgeWorkers", "Contentful"],
          link: null as string | null,
          linkLabel: "",
        },
        {
          tag: "Proyecto propio · 2026",
          title: "Motor de video programático para música",
          problem:
            "Hacer un Reel o un lyric video por canción a mano se lleva horas. Quería un sistema que tome la canción y saque videos listos para publicar, sincronizados con el ritmo.",
          role:
            "Lo diseñé y programé completo: plantillas en React con Remotion, análisis de audio para detectar beats y secciones, recortes automáticos de imágenes y un pipeline con FFmpeg que entrega versiones para YouTube, Reels y Spotify.",
          result: "[N] videos publicados en YouTube · de [X horas] a [Y minutos] por Reel",
          stack: ["React", "Remotion", "TypeScript", "FFmpeg", "Python", "librosa"],
          link: "[link a un video o a la playlist]",
          linkLabel: "Ver videos",
        },
        {
          tag: "Consultoría · 2020–2025",
          title: "Frontend y backend para clientes internacionales",
          problem: "[Describe en 1–2 líneas el proyecto más fuerte que hiciste en esta etapa: qué era y qué problema tenía el cliente.]",
          role:
            "Cinco años en una consultora de software desarrollando frontend y backend para clientes de distintos sectores. [Tu parte concreta en ese proyecto.]",
          result: "[Qué cambió: algo que lanzaste, que mejoró o que se volvió más rápido.]",
          stack: ["React", "Vue", "Node.js", "TypeScript"],
          link: null as string | null,
          linkLabel: "",
        },
      ],
    },
    services: {
      title: "Servicios",
      intro: "Trabajo directo con negocios o como parte del equipo de una agencia.",
      items: [
        {
          title: "Frontend por proyecto",
          body: "Me sumo a tu equipo o agencia para construir o mejorar apps en React, Next.js o Vue. Código limpio, tipado y fácil de mantener.",
        },
        {
          title: "Sitios y landing pages",
          body: "Sitios rápidos, que se vean bien en celular y con SEO básico listo. En Next.js o WordPress, según lo que te convenga mantener.",
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
    experience: {
      title: "Experiencia",
      items: [
        { when: "2025 – presente", what: "Sr React Engineer", where: "Dexian México · asignado a retailer Fortune 500 de EE.UU." },
        { when: "2020 – 2025", what: "Frontend / Backend Developer", where: "Sngular" },
        { when: "En curso", what: "Ingeniería en Desarrollo de Software", where: "Universidad Ciudadana de Nuevo León" },
        { when: "Formación técnica", what: "Desarrollo de Software · Paquetería Computacional", where: "UANL · FIME" },
      ],
      stackTitle: "Herramientas",
      stack: [
        "React", "TypeScript", "Next.js", "Vue", "Node.js", "Remotion", "Three.js",
        "Contentful", "Adobe Target", "EdgeWorkers", "WordPress", "FFmpeg", "Python", "Git",
      ],
      about:
        "Fuera del código produzco música como Lonare. Por eso me late tanto lo visual y lo que se mueve: muchos de mis experimentos con video empiezan con una canción mía.",
      aboutLink: "Escuchar Lonare",
    },
    contact: {
      title: "¿Tienes un proyecto?",
      body: "Cuéntame qué necesitas y te respondo en menos de 24 horas.",
      email: "Escríbeme",
      cv: "Descargar CV",
    },
    footer: "Hecho con Next.js y TypeScript por mí. Monterrey, México.",
    switchLang: "EN",
  },
  en: {
    nav: { work: "Work", services: "Services", experience: "Experience", contact: "Contact" },
    hero: {
      kicker: "Frontend Engineer · React / TypeScript",
      name: "Damian Longoria",
      title: "I build web interfaces that feel right, and video that makes itself.",
      sub: "6+ years in React. Most recently: A/B experimentation for a US retailer's high-traffic e-commerce site. On the side I build programmatic video tools with Remotion.",
      ctaPrimary: "See work",
      ctaSecondary: "Let's talk",
      status: "Available for freelance projects and remote roles",
    },
    work: {
      title: "Work",
      intro: "A few projects, told in full: the problem, what I did, and what changed.",
      labels: { problem: "Challenge", role: "My part", result: "Outcome", stack: "Stack" },
      items: [
        {
          tag: "Enterprise · 2025–2026",
          title: "A/B experimentation for a Fortune 500 retailer",
          problem:
            "The Experimentation team needed to ship and measure UI variants on a very high-traffic site without hurting performance or the shopping experience.",
          role:
            "Sr React Engineer on the US team, working fully in English. I built the variants in React, served them at the edge with Akamai EdgeWorkers, and set up and measured them in Adobe Target. Content managed in Contentful.",
          result: "[XX] experiments shipped · [impact metric, e.g. +X% conversion on one test or time-to-launch cut from X to Y]",
          stack: ["React", "TypeScript", "Adobe Target", "Akamai EdgeWorkers", "Contentful"],
          link: null as string | null,
          linkLabel: "",
        },
        {
          tag: "Own project · 2026",
          title: "Programmatic video engine for music",
          problem:
            "Making a Reel or lyric video by hand for every song takes hours. I wanted a system that takes a song and outputs ready-to-post videos synced to the beat.",
          role:
            "Designed and built it end to end: React templates with Remotion, audio analysis to detect beats and sections, automatic image cutouts, and an FFmpeg pipeline that delivers versions for YouTube, Reels and Spotify.",
          result: "[N] videos published on YouTube · from [X hours] to [Y minutes] per Reel",
          stack: ["React", "Remotion", "TypeScript", "FFmpeg", "Python", "librosa"],
          link: "[link to a video or playlist]",
          linkLabel: "Watch videos",
        },
        {
          tag: "Consulting · 2020–2025",
          title: "Frontend and backend for international clients",
          problem: "[1–2 lines about your strongest project from this period: what it was and what problem the client had.]",
          role:
            "Five years at a software consultancy building frontend and backend for clients across industries. [Your specific part in that project.]",
          result: "[What changed: something you shipped, improved or sped up.]",
          stack: ["React", "Vue", "Node.js", "TypeScript"],
          link: null as string | null,
          linkLabel: "",
        },
      ],
    },
    services: {
      title: "Services",
      intro: "I work directly with businesses or as part of an agency team.",
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
    experience: {
      title: "Experience",
      items: [
        { when: "2025 – present", what: "Sr React Engineer", where: "Dexian México · assigned to a US Fortune 500 retailer" },
        { when: "2020 – 2025", what: "Frontend / Backend Developer", where: "Sngular" },
        { when: "Ongoing", what: "B.Eng. Software Development", where: "Universidad Ciudadana de Nuevo León" },
        { when: "Technical degrees", what: "Software Development · Computer Applications", where: "UANL · FIME" },
      ],
      stackTitle: "Tools",
      stack: [
        "React", "TypeScript", "Next.js", "Vue", "Node.js", "Remotion", "Three.js",
        "Contentful", "Adobe Target", "EdgeWorkers", "WordPress", "FFmpeg", "Python", "Git",
      ],
      about:
        "Outside of code I make music as Lonare. That's why I'm into visual, moving things: a lot of my video experiments start with one of my songs.",
      aboutLink: "Listen to Lonare",
    },
    contact: {
      title: "Got a project?",
      body: "Tell me what you need and I'll get back to you within 24 hours.",
      email: "Email me",
      cv: "Download CV",
    },
    footer: "Built with Next.js and TypeScript by me. Monterrey, Mexico.",
    switchLang: "ES",
  },
};
