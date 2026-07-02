# AlbertoApps 🚀

Landing page personal de **Alberto**, desarrollador freelance de **apps en Flutter** y **webs a medida**. Una página única, visual y profesional, **ultra optimizada**: HTML estático sin frameworks de UI, animaciones 100% CSS y cero JavaScript externo.

## ✨ Secciones

- **Hero** — presentación con mockup de iPhone animado y llamadas a la acción
- **Servicios** — apps Flutter, webs, UI/UX y seguimiento/fidelización de pacientes
- **Proyectos** — proyectos destacados con enlace a los repositorios de GitHub
- **Vídeos** — demos desde YouTube con *facade*: solo se carga la miniatura y el player se inyecta al pulsar play
- **Contacto** — formulario con validación (móvil y correo obligatorios) que envía a `contact@albertoapps.info`
- **Footer** — enlaces a GitHub, LinkedIn y YouTube

## 🛠️ Stack

| Tecnología | Uso |
|---|---|
| Astro + TypeScript | Componentes `.astro` estáticos, salida SSG |
| CSS plano | Estilos y **todas las animaciones** (keyframes + IntersectionObserver mínimo para los reveals de scroll), mobile-first con custom properties |
| JS vanilla inlinado | Menú móvil, formulario y facade de YouTube — sin peticiones de scripts |
| @fontsource/inter | Fuente Inter autoalojada y precargada (sin FOUT) |
| FormSubmit | Envío del formulario sin backend |
| Vercel | Despliegue |

## ⚡ Rendimiento

- Cero islas de hidratación y cero runtime de frameworks: el HTML llega ya renderizado.
- Los tres únicos scripts (vanilla) se inlinan en el HTML del build.
- Los reveals de scroll solo se ocultan si hay JavaScript (`html.js`), así el contenido siempre es visible sin JS.
- Se respeta `prefers-reduced-motion` (los reveals pasan a fundido puro).


## 🚀 Empezar

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # build de producción (dist/)
pnpm start     # servir el build de producción
pnpm lint      # astro check (tipos + diagnósticos)
```

## 📱 Responsive

Diseño mobile-first verificado de 320px a escritorio. Las pautas y checklist están en la skill `.claude/skills/responsive/SKILL.md` (ver también `CLAUDE.md`).

## 📬 Contacto

- ✉️ contact@albertoapps.info
