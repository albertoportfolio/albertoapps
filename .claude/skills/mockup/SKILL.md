---
name: mockup
description: Guía del mockup de iPhone del Hero (componente Magic UI + pantalla de la app de clínica). Usar SIEMPRE que se haga referencia al "mockup", al "iPhone", a la pantalla/maqueta del Hero o a su contenido (tiles de seguimiento, accesos rápidos, marco, colores) para editarlo de forma coherente.
---

# Skill: Mockup de iPhone (Hero)

El Hero muestra a la derecha un **mockup de iPhone** (Magic UI) con una **pantalla de
app de clínica** simulada: seguimiento de pacientes + accesos rápidos. Esta skill
documenta cómo está montado para editarlo sin romper nada.

## Archivos clave

- `components/magicui/iphone.tsx` — componente Magic UI (iPhone 15 Pro). Es un SVG con
  Dynamic Island. Adaptado al proyecto: además de `src`/`videoSrc` acepta **`children`**
  para renderizar una pantalla a medida dentro del marco.
- `components/Hero.tsx` — usa `<Iphone>` con la pantalla (`.phone-screen`) como `children`.
  El teléfono va en la columna `.hero-visual` con animación de entrada + flotación.
- `app/globals.css` — todos los estilos del mockup, en el bloque
  `/* ---------- Hero: layout de dos columnas + iPhone mockup ---------- */`
  (clases con prefijo `.ps-*` para la pantalla, más `.hero-phone` / `.hero-visual`).

## Tailwind

- El proyecto NO usa Tailwind salvo **exclusivamente para este componente**.
- Config: `tailwind.config.ts` (con `corePlugins.preflight: false`), `postcss.config.mjs`,
  y `@tailwind utilities;` al inicio de `app/globals.css`. No añadir `@tailwind base`.
- Las clases Tailwind solo deben aparecer dentro de `components/magicui/iphone.tsx`.
  El resto de la UI (la pantalla `.ps-*`) usa CSS plano.

## Estructura de la pantalla (`.phone-screen`)

1. `.ps-statusbar` — hora + iconos.
2. `.ps-header` — saludo (`.ps-hello`) + nombre de la clínica (`.ps-title`) + avatar.
3. Sección **Seguimiento** (`.ps-section`) → `.ps-grid` de tiles:
   - `.ps-tile` cuadrado; `.ps-tile-wide` ocupa 2 columnas; `.ps-tile-accent` azul.
   - Cada tile: `.ps-tile-label` / `.ps-tile-value` / `.ps-tile-sub`.
4. Sección **Accesos rápidos** → `.ps-actions` con `.ps-action` (y `.ps-action-primary`),
   icono en `.ps-action-ico` (SVG inline con `currentColor`).
5. `.ps-nav` — barra inferior (anclada abajo con `margin-top: auto`).

## Colores y estilo

- **Fondo de pantalla:** degradado azul profesional (`#1b3a6b → #0c1f42`).
- **Tiles/acciones:** blancos con sombra; texto `#0f1f42`, subtítulos `#64748b`.
- **Acento azul:** `linear-gradient(120deg, #2563eb, #3b82f6)`.
- **Marco del iPhone:** gris apagado `#4a4b55` (variante clara editada en `iphone.tsx`).
  Para cambiarlo, editar el valor `#4a4b55` en `components/magicui/iphone.tsx`.
  Envolver en `className="...dark"` activaría la variante oscura de Magic UI (`#404040`).

## Reglas al editar

- Mantener el contenido **realista y solo de seguimiento clínico** (sin fidelización ni
  recompensas, salvo que se pida explícitamente).
- Texto en **español**.
- Respetar el contraste: bloques claros sobre fondo azul.
- Al tocar tamaños/espaciados usar `em` (la pantalla escala con `font-size` fluido en
  `.phone-screen`) para que todo se reescale junto.
- Antes de tocar el layout del Hero, consultar también la skill `responsive`.

## Verificación

Tras cualquier cambio, ejecutar `pnpm build` y revisar en el navegador en móvil (375px)
y escritorio (≥900px) que el mockup se ve correctamente y sin scroll horizontal.
