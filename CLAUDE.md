# AlbertoApps — Landing page

Landing page de Alberto, desarrollador freelance de apps Flutter y webs. Una sola página (sin router) con secciones: Hero, Servicios, Proyectos (GitHub), Vídeos (YouTube), Contacto y Footer.

## Stack

- React 19 + TypeScript + Vite 8
- Framer Motion para todas las animaciones
- CSS plano en `src/index.css` (sin Tailwind ni CSS-in-JS) con custom properties en `:root`
- Gestor de paquetes: **pnpm**

## Comandos

```bash
pnpm dev      # servidor de desarrollo
pnpm build    # tsc -b + vite build
pnpm lint     # eslint
pnpm preview  # previsualizar build
```

## Arquitectura

- `src/data/site.ts` — **única fuente de datos**: enlaces (GitHub, LinkedIn, YouTube), email, proyectos y vídeos. Cualquier dato personal o de contenido se edita aquí, nunca hardcodeado en componentes.
- `src/components/` — un componente por sección (`Navbar`, `Hero`, `Services`, `Projects`, `Videos`, `Contact`, `Footer`).
- `src/index.css` — todos los estilos, organizados por sección con comentarios separadores. Mobile-first.

## Convenciones

- Contenido del sitio en **español**; código (variables, comentarios técnicos) en inglés o español según contexto.
- Animaciones: usar `framer-motion` (`whileInView` con `viewport={{ once: true }}` para reveals de scroll, `whileHover`/`whileTap` para interacción). Respetar `prefers-reduced-motion` (ya cubierto en CSS).
- Formulario de contacto: envía vía FormSubmit (`https://formsubmit.co/ajax/<email>`) sin backend. Móvil y correo son obligatorios con validación propia (regex en `Contact.tsx`).
- Responsive: mobile-first; breakpoints usados: 560px, 640px, 700px, 820px, 900px, 1000px. Antes de tocar layout, consultar la skill `responsive` (`.claude/skills/responsive/`).
- No añadir dependencias nuevas sin necesidad clara; el proyecto debe seguir siendo ligero.
