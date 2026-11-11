# Portafolio · Damian Longoria

Sitio personal en Next.js + TypeScript, exportado como estático (sin servidor).

## Correr local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera /out listo para subir
```

## Editar contenido

Todo el texto está en `content/content.ts`, en español (`/`) y en inglés (`/en/`).
Cada idioma es una ruta con su propio metadata, así que el link en inglés se puede compartir directo.

En `links`, lo que esté en `""` no se muestra. Falta llenar:

- `cv.es` y `cv.en`: link al PDF del CV en cada idioma
- `email`: correo profesional
- `music`: canal o perfil de Lonare

## Publicar en Vercel (gratis)

1. Sube este repo a GitHub (público, sirve como muestra de código).
2. En vercel.com → Add New Project → importa el repo → Deploy.
3. Opcional: conecta un dominio propio (ej. `damianlongoria.dev`).

## Pendientes recomendados

- Agregar el caso de un sitio para negocio cuando termines AC Diseño y Construcción.
- Publicar un repo demo del generador de video y enlazarlo en ese caso.
- Agregar capturas o un clip corto en cada caso.
