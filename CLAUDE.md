# AlbertoApps — Landing page

Landing page de Alberto, desarrollador freelance de apps Flutter y webs. Una sola página (sin rutas internas) con secciones: Hero, Servicios, Proyectos (GitHub), Vídeos (YouTube), Contacto y Footer.

## Stack

- **Next.js 15 (App Router)** + React 19 + TypeScript
- Prerenderizado estático (SSG) para SEO; despliegue en **Vercel**
- Framer Motion para todas las animaciones (componentes interactivos con `"use client"`)
- CSS plano en `app/globals.css` (sin Tailwind ni CSS-in-JS) con custom properties en `:root`
- Fuente Inter vía `next/font` (variable `--font-inter`)
- Gestor de paquetes: **pnpm**

## Comandos

```bash
pnpm dev      # servidor de desarrollo (next dev)
pnpm build    # next build
pnpm start    # servir el build de producción
pnpm lint     # next lint
```

## Arquitectura

- `app/layout.tsx` — layout raíz: `<html lang="es">`, **metadatos SEO** (Metadata API: title/description, OpenGraph, Twitter, robots, canonical), fuente Inter y **JSON-LD** (`ProfessionalService`). El dominio canónico está en la constante `SITE_URL`.
- `app/page.tsx` — Server Component que compone las secciones.
- `app/sitemap.ts` y `app/robots.ts` — generan `sitemap.xml` y `robots.txt`.
- `data/site.ts` — **única fuente de datos**: enlaces (GitHub, LinkedIn, YouTube), email, proyectos y vídeos. Cualquier dato personal o de contenido se edita aquí, nunca hardcodeado en componentes.
- `components/` — un componente por sección (`Navbar`, `Hero`, `Services`, `Projects`, `Videos`, `Contact`, `Footer`). Todos los que usan hooks o framer-motion llevan `"use client"` en la primera línea; `Footer` es Server Component.
- `app/globals.css` — todos los estilos, organizados por sección con comentarios separadores. Mobile-first.

## SEO

- Editar título/descripción/keywords y datos OpenGraph en `metadata` de `app/layout.tsx`.
- Cambiar el dominio en `SITE_URL` (`app/layout.tsx`), `app/sitemap.ts` y `app/robots.ts` si no es `https://albertoapps.info`.
- Imagen OG: `public/aplogo.png` (idealmente sustituir por una 1200×630 dedicada).

## Convenciones

- Contenido del sitio en **español**; código (variables, comentarios técnicos) en inglés o español según contexto.
- Animaciones: usar `framer-motion` (`whileInView` con `viewport={{ once: true }}` para reveals de scroll, `whileHover`/`whileTap` para interacción). Respetar `prefers-reduced-motion` (ya cubierto en CSS).
- Formulario de contacto: envía vía FormSubmit (`https://formsubmit.co/ajax/<email>`) sin backend. Móvil y correo son obligatorios con validación propia (regex en `Contact.tsx`).
- Responsive: mobile-first; breakpoints usados: 560px, 640px, 700px, 820px, 900px, 1000px. Antes de tocar layout, consultar la skill `responsive` (`.claude/skills/responsive/`).
- No añadir dependencias nuevas sin necesidad clara; el proyecto debe seguir siendo ligero.
