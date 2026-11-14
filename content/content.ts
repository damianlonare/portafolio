// Todo el texto del sitio vive aquí, en español e inglés.
// Las páginas solo acomodan este contenido; para cambiar un texto o un precio, edita este archivo.

export type Lang = "es" | "en";
export type PageKey = "home" | "software" | "hire";

export const SITE_URL = "https://damianlonare.com";

const WHATSAPP = "528123524173";
export const whatsappLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// Deja en "" lo que todavía no tengas: el sitio oculta ese botón o link.
export const links = {
  email: "",
  linkedin: "https://www.linkedin.com/in/pedro-damian-l-290586159",
  github: "https://github.com/damianlonare",
  cv: { es: "/cv/Damian-Longoria-CV.pdf", en: "/cv/Damian-Longoria-Resume.pdf" },
  photo: "/damian.jpg",
};

// Rutas de cada página en cada idioma.
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/en/" },
  software: { es: "/software/", en: "/en/software/" },
  hire: { es: "/contratar/", en: "/en/hire/" },
};

export const ui = {
  es: {
    brand: "Damian Lonare",
    nav: { software: "Software", hire: "Para reclutadores", contact: "Contacto" },
    navLabel: "Principal",
    switchLang: "EN",
    switchLabel: "Read in English",
    theme: { toLight: "Cambiar a tema claro", toDark: "Cambiar a tema oscuro" },
    footer: "Damian Lonare · Monterrey, México",
    whatsapp: "Escríbeme por WhatsApp",
  },
  en: {
    brand: "Damian Lonare",
    nav: { software: "Software", hire: "For recruiters", contact: "Contact" },
    navLabel: "Main",
    switchLang: "ES",
    switchLabel: "Leer en español",
    theme: { toLight: "Switch to light theme", toDark: "Switch to dark theme" },
    footer: "Damian Lonare · Monterrey, Mexico",
    whatsapp: "Message me on WhatsApp",
  },
};

export const meta: Record<PageKey, Record<Lang, { title: string; description: string }>> = {
  home: {
    es: {
      title: "Damian Lonare · Páginas web y automatización para negocios",
      description:
        "Ingeniero de software en Monterrey. Páginas web, tiendas en línea y automatización para negocios, con 9 años de experiencia en empresas como The Home Depot y Grupo Modelo.",
    },
    en: {
      title: "Damian Lonare · Websites and automation for businesses",
      description:
        "Software engineer in Monterrey, Mexico. Websites, online stores and automation for businesses, with 9 years of experience at companies like The Home Depot and Grupo Modelo.",
    },
  },
  software: {
    es: {
      title: "Páginas web, tiendas en línea y automatización · Damian Lonare",
      description:
        "Landing pages desde $4,500 MXN, sitios de 5 páginas desde $8,000 MXN, tiendas en línea desde $6,500 MXN, sistemas a la medida y automatización para negocios.",
    },
    en: {
      title: "Websites, online stores and automation · Damian Lonare",
      description:
        "Landing pages from $4,500 MXN, 5-page websites from $8,000 MXN, online stores from $6,500 MXN, custom systems and automation for businesses.",
    },
  },
  hire: {
    es: {
      title: "Pedro Damian Longoria · Senior Software Engineer",
      description:
        "Senior Software Engineer con 9 años de experiencia. Construyó el sistema de pruebas A/B de homedepot.com. Remoto desde Monterrey, México, en inglés.",
    },
    en: {
      title: "Pedro Damian Longoria · Senior Software Engineer",
      description:
        "Senior Software Engineer with 9 years of experience. Built the A/B testing system behind homedepot.com. Remote from Monterrey, Mexico (UTC−6), works in English.",
    },
  },
};

export const clients = ["The Home Depot", "Grupo Modelo (AB InBev)", "Fundación BBVA", "AMIB"];

export const home = {
  es: {
    kicker: "Ingeniero de software · Monterrey, México",
    title: ["Construyo tu página web.", "Automatizo tu negocio."],
    sub: "Llevo 9 años haciendo sitios y sistemas para empresas como The Home Depot y Grupo Modelo. Ahora hago lo mismo para negocios como el tuyo: cuéntame qué necesitas y te digo cómo lo hacemos.",
    photoAlt: "Foto de Damian",
    doorsTitle: "¿Qué necesitas?",
    doors: [
      {
        icon: "screen",
        title: "Una página web o una tienda",
        body: "Páginas para tu negocio y tiendas en línea que se ven bien en celular y te traen clientes.",
        note: "Desde $4,500 MXN",
        cta: "Ver servicios de software",
        to: "software" as PageKey,
        hash: "",
      },
      {
        icon: "auto",
        title: "Automatizar mi negocio",
        body: "Que lo repetitivo se haga solo: cotizaciones, recordatorios a clientes, reportes.",
        note: "Se cotiza según el proceso",
        cta: "Ver qué se puede automatizar",
        to: "software" as PageKey,
        hash: "#automatizacion",
      },
      {
        icon: "brief",
        title: "Estoy contratando",
        body: "Senior Software Engineer con 9 años de experiencia. Trabajo remoto y en inglés.",
        note: "Perfil en inglés y CV",
        cta: "Ver perfil para reclutadores",
        to: "hire" as PageKey,
        hash: "",
      },
    ],
    clientsLabel: "He trabajado en proyectos para",
    processTitle: "Cómo trabajamos",
    processSub: "Del primer mensaje a tu sitio publicado.",
    stepLabel: "Paso",
    process: [
      { title: "Platicamos", body: "Me cuentas tu idea por WhatsApp o en una llamada corta." },
      { title: "Te mando precio y fecha", body: "Por escrito, con lo que incluye y lo que no. Sin sorpresas." },
      { title: "Arrancamos con 50%", body: "Ves avances durante el proyecto y pides hasta 2 rondas de cambios." },
      { title: "Entrega", body: "Pagas el resto y recibes tu sitio publicado o tu sistema funcionando." },
    ],
    contactTitle: "¿Platicamos?",
    contactBody: "Te respondo en menos de 24 horas.",
    whatsappText: "Hola Damian, vi tu página y me interesa platicar sobre un proyecto.",
  },
  en: {
    kicker: "Software engineer · Monterrey, Mexico",
    title: ["I build your website.", "I automate your business."],
    sub: "I've spent 9 years building websites and systems for companies like The Home Depot and Grupo Modelo. Now I do the same for businesses like yours: tell me what you need and I'll tell you how we'll do it.",
    photoAlt: "Photo of Damian",
    doorsTitle: "What do you need?",
    doors: [
      {
        icon: "screen",
        title: "A website or an online store",
        body: "Websites for your business and online stores that look good on phones and bring you customers.",
        note: "From $4,500 MXN",
        cta: "See software services",
        to: "software" as PageKey,
        hash: "",
      },
      {
        icon: "auto",
        title: "Automate my business",
        body: "Let the repetitive work run on its own: quotes, customer reminders, reports.",
        note: "Quoted per process",
        cta: "See what can be automated",
        to: "software" as PageKey,
        hash: "#automatizacion",
      },
      {
        icon: "brief",
        title: "I'm hiring",
        body: "Senior Software Engineer with 9 years of experience. Remote, in English.",
        note: "Profile and résumé",
        cta: "See recruiter profile",
        to: "hire" as PageKey,
        hash: "",
      },
    ],
    clientsLabel: "I've worked on projects for",
    processTitle: "How we work",
    processSub: "From the first message to your site going live.",
    stepLabel: "Step",
    process: [
      { title: "We talk", body: "You tell me your idea on WhatsApp or in a short call." },
      { title: "You get a price and a date", body: "In writing, with what's included and what isn't. No surprises." },
      { title: "We start with 50%", body: "You see progress along the way and get up to 2 rounds of changes." },
      { title: "Delivery", body: "You pay the rest and get your site live or your system running." },
    ],
    contactTitle: "Let's talk?",
    contactBody: "I reply within 24 hours.",
    whatsappText: "Hi Damian, I saw your website and I'd like to talk about a project.",
  },
};

export const software = {
  es: {
    kicker: "Software para negocios",
    title: "Tu negocio en internet, funcionando y vendiendo.",
    sub: "Diseño y programo páginas web, tiendas en línea y sistemas a la medida, y automatizo las tareas repetitivas de tu negocio. Rápidos, que se ven bien en celular y que tú puedes actualizar.",
    ctaPrimary: "Cotizar por WhatsApp",
    ctaSecondary: "Ver proyectos",
    pricesTitle: "Qué hago y cuánto cuesta",
    pricesPill: "Precios de lanzamiento",
    from: "desde",
    services: [
      { id: "", title: "Landing page", body: "Una página para presentar tu negocio y recibir clientes por WhatsApp.", price: "$4,500", unit: "MXN", from: true },
      { id: "", title: "Sitio web de 5 páginas", body: "Inicio, servicios, galería, nosotros y contacto. En WordPress, para que lo edites tú.", price: "$8,000", unit: "MXN", from: true },
      { id: "", title: "Tienda en línea", body: "Desde un catálogo que te manda los pedidos por WhatsApp hasta una tienda completa con carrito y pagos con tarjeta, transferencia u OXXO.", price: "$6,500", unit: "MXN", from: true },
      { id: "", title: "Sistema o app a la medida", body: "Reservas, inventario, pagos en línea, paneles con tus números.", price: "Se cotiza", unit: "según el proyecto", from: false },
      { id: "automatizacion", title: "Automatización", body: "Cotizaciones que se arman solas, recordatorios por WhatsApp a tus clientes y reportes que llegan a tu correo.", price: "Se cotiza", unit: "según el proceso", from: false },
      { id: "", title: "Mantenimiento", body: "Actualizaciones, respaldos y cambios pequeños cada mes.", price: "$1,200", unit: "MXN al mes", from: false },
    ],
    includesTitle: "Todas incluyen",
    includes: ["Diseño que se ve bien en celular", "Botón de WhatsApp y Google Maps", "Lo básico para salir en Google", "Ayuda con dominio y hosting"],
    workTitle: "Proyectos",
    workSub: "Contados en lo que resolvieron, no en la tecnología que usé.",
    work: [
      {
        tag: "E-commerce · Estados Unidos",
        title: "The Home Depot",
        body: "Un sistema para probar dos versiones de una página de homedepot.com al mismo tiempo y quedarse con la que vende más. Otros equipos de la empresa lo usaban para sus propias pruebas.",
      },
      {
        tag: "Tiendas · México",
        title: "Grupo Modelo · Modelorama",
        body: "El sistema con el que el personal de las tiendas Modelorama cobraba con tarjeta y pagaba a sus distribuidores.",
      },
      {
        tag: "Fundaciones · México",
        title: "Fundación BBVA",
        body: "El portal con el que el equipo de la fundación administraba los donativos.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Cómo se paga?", a: "50% para empezar y 50% al entregar, por transferencia." },
      { q: "No tengo dominio ni hosting, ¿qué hago?", a: "Te ayudo a contratarlos a tu nombre, para que siempre sean tuyos." },
      { q: "¿Puedo cambiar los textos yo mismo?", a: "Sí. Si lo vas a editar tú, lo hago en WordPress y te enseño a usarlo." },
      { q: "¿Qué se puede automatizar?", a: "Casi cualquier tarea que hagas igual cada día o cada semana. Cuéntame cómo la haces hoy y te digo si conviene automatizarla." },
    ],
    contactTitle: "Cuéntame de tu negocio",
    contactBody: "Te respondo con una propuesta en menos de 24 horas.",
    contactCta: "Cotizar por WhatsApp",
    whatsappText: "Hola Damian, me interesa cotizar un proyecto para mi negocio.",
  },
  en: {
    kicker: "Software for businesses",
    title: "Your business online, working and selling.",
    sub: "I design and build websites, online stores and custom systems, and automate the repetitive tasks in your business. Fast, good-looking on phones, and easy for you to update.",
    ctaPrimary: "Get a quote on WhatsApp",
    ctaSecondary: "See projects",
    pricesTitle: "What I do and what it costs",
    pricesPill: "Launch prices",
    from: "from",
    services: [
      { id: "", title: "Landing page", body: "One page to present your business and get customers on WhatsApp.", price: "$4,500", unit: "MXN", from: true },
      { id: "", title: "5-page website", body: "Home, services, gallery, about and contact. Built in WordPress so you can edit it.", price: "$8,000", unit: "MXN", from: true },
      { id: "", title: "Online store", body: "From a catalog that sends orders to your WhatsApp to a full store with a cart and card, bank-transfer or OXXO payments.", price: "$6,500", unit: "MXN", from: true },
      { id: "", title: "Custom system or app", body: "Bookings, inventory, online payments, dashboards with your numbers.", price: "Quoted", unit: "per project", from: false },
      { id: "automatizacion", title: "Automation", body: "Quotes that put themselves together, WhatsApp reminders for your customers, and reports that land in your inbox.", price: "Quoted", unit: "per process", from: false },
      { id: "", title: "Maintenance", body: "Updates, backups and small changes every month.", price: "$1,200", unit: "MXN a month", from: false },
    ],
    includesTitle: "All of them include",
    includes: ["A design that looks good on phones", "WhatsApp button and Google Maps", "The basics to show up on Google", "Help with domain and hosting"],
    workTitle: "Projects",
    workSub: "Told by what they solved, not by the tech I used.",
    work: [
      {
        tag: "E-commerce · United States",
        title: "The Home Depot",
        body: "A system to show two versions of a homedepot.com page at the same time and keep the one that sells more. Other teams in the company used it for their own tests.",
      },
      {
        tag: "Retail · Mexico",
        title: "Grupo Modelo · Modelorama",
        body: "The system Modelorama store staff used to take card payments and pay their distributors.",
      },
      {
        tag: "Foundations · Mexico",
        title: "Fundación BBVA",
        body: "The portal the foundation's team used to manage donations.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "How do I pay?", a: "50% to start and 50% on delivery, by bank transfer." },
      { q: "I don't have a domain or hosting. What do I do?", a: "I help you get them in your name, so they're always yours." },
      { q: "Can I change the text myself?", a: "Yes. If you'll be editing it, I build it in WordPress and show you how to use it." },
      { q: "What can be automated?", a: "Almost any task you do the same way every day or every week. Tell me how you do it today and I'll tell you if it's worth automating." },
    ],
    contactTitle: "Tell me about your business",
    contactBody: "I'll reply with a proposal within 24 hours.",
    contactCta: "Get a quote on WhatsApp",
    whatsappText: "Hi Damian, I'd like a quote for a project for my business.",
  },
};

export const hire = {
  en: {
    kicker: "For recruiters and hiring managers",
    name: "Pedro Damian Longoria",
    role: "Senior Software Engineer · 9 years",
    sub: "I build the parts of websites and web apps that people see and use. Most recently I built the system The Home Depot used to test new versions of homedepot.com and keep the ones that sold more. I work remotely from Mexico, in English, on US Central time.",
    photoAlt: "Photo of Pedro Damian Longoria",
    cv: "Download résumé (PDF)",
    glanceTitle: "At a glance",
    glance: [
      { label: "Role", value: "Senior Frontend or Full-Stack Engineer" },
      { label: "Experience", value: "9+ years (2017 – 2026)" },
      { label: "Worked for", value: "The Home Depot, AB InBev (Grupo Modelo), Fundación BBVA, AMIB" },
      { label: "English", value: "Professional, one year daily with a US team" },
      { label: "Location", value: "Monterrey, Mexico · UTC−6" },
      { label: "Work mode", value: "Remote · open to relocating" },
      { label: "Education", value: "Software Development, UANL · B.Eng. in progress" },
    ],
    skillsTitle: "Skills",
    skillsSub: "The keywords you may be screening for, with a line on what each group is for.",
    skills: [
      { title: "Frontend", body: "Building the screens people see and click.", items: ["React", "TypeScript", "JavaScript", "Next.js", "Vue 3", "Angular", "Redux", "GraphQL"] },
      { title: "Backend and cloud", body: "The services and data behind the screens.", items: ["Node.js", "AWS Lambda", "DynamoDB", "PostgreSQL", "MySQL", "Docker"] },
      { title: "Experimentation and quality", body: "Testing ideas with real users, and testing code before it ships.", items: ["A/B testing", "Adobe Target", "Akamai EdgeWorkers", "Jest", "React Testing Library", "Contentful"] },
    ],
    expTitle: "Experience",
    exp: [
      {
        when: "Nov 2025 – Nov 2026",
        what: "Senior React Engineer · Dexian",
        where: "Assigned to The Home Depot (USA), Experimentation team · remote, in English",
        body: "Built and ran the A/B testing system other product teams used on homedepot.com, and owned releases from staging to production.",
      },
      {
        when: "Sep 2020 – Oct 2025",
        what: "Frontend & Backend Developer · Sngular",
        where: "Software consultancy · clients: Grupo Modelo (AB InBev), AMIB, Fundación BBVA",
        body: "Built a card-payment system for Modelorama stores, serverless services on AWS, and admin portals in Angular and Vue.",
      },
      { when: "Jun 2019 – Jul 2020", what: "Full-Stack Developer · FDI Connect", where: "", body: "B2B online store with per-supplier storefronts, coupons and card payments." },
      { when: "May 2017 – Jun 2019", what: "Frontend Developer · Foodi", where: "", body: "Multi-vendor marketplace on the web and a mobile app." },
    ],
    expMore: "Full details in the résumé (PDF)",
    workTitle: "Selected work",
    work: [
      { tag: "The Home Depot", title: "A/B testing at the edge", body: "Let teams show two versions of a page to real shoppers and keep the one that sells more." },
      { tag: "Grupo Modelo", title: "Payments for Modelorama stores", body: "Store staff took card payments and paid their distributors from one React app backed by AWS services." },
      { tag: "Own project", title: "Video engine for music", body: "Turns a song into ready-to-post videos synced to the beat, built with React and Remotion." },
    ],
    contactTitle: "Hiring for a role?",
    contactBody: "I reply within 24 hours.",
    email: "Email me",
    whatsappText: "Hi Damian, I'm reaching out about a software engineering role.",
  },
  es: {
    kicker: "Para reclutadores y líderes de equipo",
    name: "Pedro Damian Longoria",
    role: "Senior Software Engineer · 9 años",
    sub: "Construyo las partes de los sitios y aplicaciones web que la gente ve y usa. Lo más reciente: el sistema con el que The Home Depot probaba nuevas versiones de homedepot.com y se quedaba con las que vendían más. Trabajo remoto desde México, en inglés, en horario del centro de EE. UU.",
    photoAlt: "Foto de Pedro Damian Longoria",
    cv: "Descargar CV (PDF)",
    glanceTitle: "En resumen",
    glance: [
      { label: "Puesto", value: "Senior Frontend o Full-Stack Engineer" },
      { label: "Experiencia", value: "9+ años (2017 – 2026)" },
      { label: "He trabajado para", value: "The Home Depot, AB InBev (Grupo Modelo), Fundación BBVA, AMIB" },
      { label: "Inglés", value: "Profesional, un año diario con un equipo de EE. UU." },
      { label: "Ubicación", value: "Monterrey, México · UTC−6" },
      { label: "Modalidad", value: "Remoto · abierto a mudarme" },
      { label: "Estudios", value: "Desarrollo de Software, UANL · Ingeniería en curso" },
    ],
    skillsTitle: "Habilidades",
    skillsSub: "Las palabras clave que quizá estás buscando, con una línea de para qué sirve cada grupo.",
    skills: [
      { title: "Frontend", body: "Las pantallas que la gente ve y usa.", items: ["React", "TypeScript", "JavaScript", "Next.js", "Vue 3", "Angular", "Redux", "GraphQL"] },
      { title: "Backend y nube", body: "Los servicios y los datos detrás de las pantallas.", items: ["Node.js", "AWS Lambda", "DynamoDB", "PostgreSQL", "MySQL", "Docker"] },
      { title: "Experimentación y calidad", body: "Probar ideas con usuarios reales, y probar el código antes de lanzarlo.", items: ["Pruebas A/B", "Adobe Target", "Akamai EdgeWorkers", "Jest", "React Testing Library", "Contentful"] },
    ],
    expTitle: "Experiencia",
    exp: [
      {
        when: "Nov 2025 – Nov 2026",
        what: "Senior React Engineer · Dexian",
        where: "Asignado a The Home Depot (EE. UU.), equipo de Experimentation · remoto, en inglés",
        body: "Construí y operé el sistema de pruebas A/B que otros equipos de producto usaban en homedepot.com, y llevé los lanzamientos de staging a producción.",
      },
      {
        when: "Sep 2020 – Oct 2025",
        what: "Desarrollador Frontend y Backend · Sngular",
        where: "Consultora de software · clientes: Grupo Modelo (AB InBev), AMIB, Fundación BBVA",
        body: "Construí un sistema de cobro con tarjeta para las tiendas Modelorama, servicios serverless en AWS y portales administrativos en Angular y Vue.",
      },
      { when: "Jun 2019 – Jul 2020", what: "Desarrollador Full-Stack · FDI Connect", where: "", body: "Tienda en línea B2B con tiendas por proveedor, cupones y pagos con tarjeta." },
      { when: "May 2017 – Jun 2019", what: "Desarrollador Frontend · Foodi", where: "", body: "Marketplace con múltiples vendedores en web y una app móvil." },
    ],
    expMore: "Todos los detalles en el CV (PDF)",
    workTitle: "Proyectos destacados",
    work: [
      { tag: "The Home Depot", title: "Pruebas A/B en el edge", body: "Permitía a los equipos mostrar dos versiones de una página a compradores reales y quedarse con la que vendía más." },
      { tag: "Grupo Modelo", title: "Pagos para tiendas Modelorama", body: "El personal cobraba con tarjeta y pagaba a sus distribuidores desde una app en React con servicios en AWS." },
      { tag: "Proyecto propio", title: "Motor de video para música", body: "Convierte una canción en videos listos para publicar, sincronizados con el ritmo, hechos con React y Remotion." },
    ],
    contactTitle: "¿Tienes una vacante?",
    contactBody: "Te respondo en menos de 24 horas.",
    email: "Escríbeme",
    whatsappText: "Hola Damian, te contacto por una vacante de desarrollo de software.",
  },
};

// Demos en vivo: proyectos de muestra que se pueden abrir y probar.
// Se muestran en Software y en la página para reclutadores.
export const demos = {
  es: {
    title: "Demos en vivo",
    sub: "Proyectos de muestra que puedes abrir y probar. No se cobra nada.",
    live: "Ver demo",
    code: "Ver código",
    items: [
      {
        id: "plugin-store",
        tag: "Tienda en línea · Software",
        title: "Tienda de plugins de audio",
        body: "Una tienda completa de punta a punta: catálogo con filtros, carrito con descuento por combo, pago con Stripe y licencias que el producto valida sin internet.",
        stack: ["Next.js", "TypeScript", "Stripe", "Cloudflare Workers"],
        img: "/demos/plugin-store.jpg",
        alt: "Página de inicio de la tienda de plugins de audio",
        live: "https://plugins-demo.damianlonare.com/",
        code: "https://github.com/damianlonare/lonare-plugin-store",
      },
      {
        id: "beatvault",
        tag: "Tienda en línea · Música",
        title: "BeatVault",
        body: "Tienda de beats, stems y servicios de mezcla: catálogo con licencias, carrito, área de cliente y panel del estudio. 18 pantallas navegables.",
        stack: ["HTML", "Tailwind CSS", "Google Stitch", "Cloudflare Pages"],
        img: "/demos/beatvault.jpg",
        alt: "Página de inicio de BeatVault, tienda de beats",
        live: "https://beats-demo.damianlonare.com/",
        code: "https://github.com/damianlonare/beatvault-demo",
      },
    ],
  },
  en: {
    title: "Live demos",
    sub: "Sample projects you can open and click through. Nothing gets charged.",
    live: "Open demo",
    code: "View code",
    items: [
      {
        id: "plugin-store",
        tag: "Online store · Software",
        title: "Audio plugin store",
        body: "A complete store, end to end: filterable catalog, cart with a bundle discount, Stripe checkout, and license keys the product verifies offline.",
        stack: ["Next.js", "TypeScript", "Stripe", "Cloudflare Workers"],
        img: "/demos/plugin-store.jpg",
        alt: "Home page of the audio plugin store",
        live: "https://plugins-demo.damianlonare.com/",
        code: "https://github.com/damianlonare/lonare-plugin-store",
      },
      {
        id: "beatvault",
        tag: "Online store · Music",
        title: "BeatVault",
        body: "A store for beats, stems and mixing services: catalog with licenses, cart, client area and studio dashboard. 18 clickable screens.",
        stack: ["HTML", "Tailwind CSS", "Google Stitch", "Cloudflare Pages"],
        img: "/demos/beatvault.jpg",
        alt: "Home page of BeatVault, a beat store",
        live: "https://beats-demo.damianlonare.com/",
        code: "https://github.com/damianlonare/beatvault-demo",
      },
    ],
  },
};
