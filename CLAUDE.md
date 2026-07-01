# AlbertoApps — Landing page

Landing page de Alberto, desarrollador freelance de apps Flutter y webs. Una sola página (sin rutas internas) con secciones: Hero, Servicios, Proyectos (GitHub), Vídeos (YouTube), Contacto y Footer.

## Stack

- **Astro 5** + islas de **React 19** + TypeScript
- Salida estática (SSG) para SEO; despliegue en **Vercel**
- Framer Motion para todas las animaciones (los componentes React se hidratan con `client:load` en `src/pages/index.astro`)
- CSS plano en `src/styles/globals.css` (sin CSS-in-JS) con custom properties en `:root`. Tailwind se usa de forma acotada (solo utilidades, sin preflight) para el mockup de iPhone de Magic UI; se procesa vía PostCSS (`postcss.config.mjs` + `tailwind.config.ts`)
- Fuente Inter autoalojada vía `@fontsource/inter` (importada en `Layout.astro`, expuesta como `--font-inter`)
- Gestor de paquetes: **pnpm**

## Comandos

```bash
pnpm dev      # servidor de desarrollo (astro dev)
pnpm build    # astro build (genera dist/)
pnpm start    # astro preview (sirve el build de producción)
pnpm lint     # astro check (tipos + diagnósticos)
```

## Arquitectura

- `src/layouts/Layout.astro` — layout raíz: `<html lang="es">`, **metadatos SEO** (title/description, keywords, OpenGraph, Twitter, robots, canonical), fuente Inter y **JSON-LD** (`ProfessionalService`). El dominio canónico está en la constante `SITE_URL`.
- `src/pages/index.astro` — única página: compone las secciones dentro del layout. Los componentes interactivos llevan `client:load`; `Footer` se renderiza estático (sin directiva).
- `astro.config.mjs` — `site` (dominio canónico) e integraciones `@astrojs/react` y `@astrojs/sitemap` (genera `sitemap-index.xml` en el build).
- `public/robots.txt` — robots estático; apunta al sitemap.
- `src/data/site.ts` — **única fuente de datos**: enlaces (GitHub, LinkedIn, YouTube), email, proyectos y vídeos. Cualquier dato personal o de contenido se edita aquí, nunca hardcodeado en componentes.
- `src/components/` — un componente React (`.tsx`) por sección (`Navbar`, `Hero`, `Services`, `Projects`, `Videos`, `Contact`, `Footer`); `magicui/iphone.tsx` es el mockup del Hero.
- `src/styles/globals.css` — todos los estilos, organizados por sección con comentarios separadores. Mobile-first.

## SEO

- Editar título/descripción/keywords y datos OpenGraph en `src/layouts/Layout.astro`.
- Cambiar el dominio en `SITE_URL` (`src/layouts/Layout.astro`), `site` en `astro.config.mjs` y `public/robots.txt` si no es `https://albertoapps.info`.
- Imagen OG: `public/aplogo.png` (idealmente sustituir por una 1200×630 dedicada).

## Convenciones

- Contenido del sitio en **español**; código (variables, comentarios técnicos) en inglés o español según contexto.
- Animaciones: usar `framer-motion` (`whileInView` con `viewport={{ once: true }}` para reveals de scroll, `whileHover`/`whileTap` para interacción). Respetar `prefers-reduced-motion` (ya cubierto en CSS).
- Formulario de contacto: envía vía FormSubmit (`https://formsubmit.co/ajax/<email>`) sin backend. Móvil y correo son obligatorios con validación propia (regex en `Contact.tsx`).
- Responsive: mobile-first; breakpoints usados: 560px, 640px, 700px, 820px, 900px, 1000px. Antes de tocar layout, consultar la skill `responsive` (`.claude/skills/responsive/`).
- No añadir dependencias nuevas sin necesidad clara; el proyecto debe seguir siendo ligero.
