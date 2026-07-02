# AlbertoApps — Landing page

Landing page de Alberto, desarrollador freelance de apps Flutter y webs. Una sola página (sin rutas internas) con secciones: Hero, Servicios, Proyectos (GitHub), Vídeos (YouTube), Contacto y Footer.

## Stack

- **Astro** + TypeScript, **sin frameworks de UI**: todos los componentes son `.astro` estáticos (cero islas, cero runtime de React)
- Salida estática (SSG) para SEO; despliegue en **Vercel**
- **Animaciones 100% CSS** (keyframes + transitions en `globals.css`). Los reveals de scroll usan un IntersectionObserver mínimo en `Layout.astro` que añade `.in-view` a los elementos `.reveal`
- JS vanilla mínimo, inlinado por Astro en el HTML (sin peticiones de scripts): menú móvil (`Navbar.astro`), formulario (`Contact.astro`) y facade de YouTube (`Videos.astro`)
- CSS plano en `src/styles/globals.css` (sin CSS-in-JS, sin Tailwind) con custom properties en `:root`
- Fuente Inter autoalojada vía `@fontsource/inter` (importada en `Layout.astro`, expuesta como `--font-inter`). Los woff2 latinos de los pesos above-the-fold (400/600/700/800) se **precargan** con `<link rel="preload">` en `Layout.astro` para evitar el repintado por FOUT
- Gestor de paquetes: **pnpm**

## Comandos

```bash
pnpm dev      # servidor de desarrollo (astro dev)
pnpm build    # astro build (genera dist/)
pnpm start    # astro preview (sirve el build de producción)
pnpm lint     # astro check (tipos + diagnósticos)
```

## Arquitectura

- `src/layouts/Layout.astro` — layout raíz: `<html lang="es">`, **metadatos SEO** (title/description, keywords, OpenGraph, Twitter, robots, canonical), fuente Inter, **JSON-LD** (`ProfessionalService`), el script inline que añade `html.js` y el IntersectionObserver de los reveals. El dominio canónico está en la constante `SITE_URL`.
- `src/pages/index.astro` — única página: compone las secciones dentro del layout.
- `astro.config.mjs` — `site` (dominio canónico) e integración `@astrojs/sitemap` (genera `sitemap-index.xml` en el build).
- `public/robots.txt` — robots estático; apunta al sitemap.
- `src/data/site.ts` — **única fuente de datos**: enlaces (GitHub, LinkedIn, YouTube), email, proyectos y vídeos. Cualquier dato personal o de contenido se edita aquí, nunca hardcodeado en componentes.
- `src/components/` — un componente Astro (`.astro`) por sección (`Navbar`, `Hero`, `Services`, `Projects`, `Videos`, `Contact`, `Footer`); `magicui/Iphone.astro` es el mockup del Hero (SVG estático, estilos `.iphone*` en `globals.css`).
- `src/styles/globals.css` — todos los estilos, organizados por sección con comentarios separadores. Mobile-first.

## Rendimiento (prioridad nº 1)

- **Cero JS externo**: los tres `<script>` de Astro son tan pequeños que se inlinan en el HTML. No añadir islas ni frameworks de UI; cualquier interactividad nueva va en JS vanilla dentro del `.astro` correspondiente.
- **Animaciones**: siempre CSS. Reveals de scroll: añadir la clase `reveal` (variantes `reveal-left`, `reveal-right`, `reveal-scale`, `reveal-fade`; retardo escalonado con `--rd`). Solo se ocultan bajo `html.js`, así el contenido es visible sin JavaScript.
- **`prefers-reduced-motion`**: el bloque global de `globals.css` desactiva animaciones/transiciones y DEBE mantener `animation-iteration-count: 1 !important` (sin él, las animaciones infinitas vibran al reiniciarse cada 0.01ms). Dos excepciones deliberadas dentro del bloque: la flotación del iPhone (`.hero-phone`) se mantiene siempre, y los reveals pasan a fundido puro de 0.5s (`fade-in`) en vez de aparición instantánea.
- **Al añadir fuentes o pesos nuevos**: precargar el woff2 latino en `Layout.astro` si se ve above-the-fold; si no, el texto se repinta al llegar la fuente (parece una doble carga).
- El destello sin estilos al recargar en `pnpm dev` es normal (Vite inyecta el CSS por JS para el hot-reload); no ocurre en el build. Juzgar rendimiento/aspecto siempre con `pnpm build` + `pnpm start`.
- **Vídeos de YouTube**: facade con miniatura (`i.ytimg.com`); el iframe (`youtube-nocookie.com`) solo se inyecta al pulsar play. No incrustar iframes directamente.
- En grids con inputs de formulario usar `minmax(0, 1fr)` (no `1fr`) para que el min-content intrínseco de los inputs no desborde el viewport en móvil.

## SEO

- Editar título/descripción/keywords y datos OpenGraph en `src/layouts/Layout.astro`.
- Cambiar el dominio en `SITE_URL` (`src/layouts/Layout.astro`), `site` en `astro.config.mjs` y `public/robots.txt` si no es `https://albertoapps.info`.
- Imagen OG: `public/aplogo.png` (idealmente sustituir por una 1200×630 dedicada).

## Convenciones

- Contenido del sitio en **español**; código (variables, comentarios técnicos) en inglés o español según contexto.
- Formulario de contacto: envía vía FormSubmit (`https://formsubmit.co/ajax/<email>`) sin backend. Móvil y correo son obligatorios con validación propia (regex en el script de `Contact.astro`).
- Responsive: mobile-first; breakpoints usados: 560px, 640px, 700px, 820px, 900px, 1000px. Antes de tocar layout, consultar la skill `responsive` (`.claude/skills/responsive/`).
- No añadir dependencias nuevas sin necesidad clara; el proyecto debe seguir siendo ligero.
