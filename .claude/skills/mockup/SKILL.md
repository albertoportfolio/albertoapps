---
name: mockup
description: Guía del mockup de iPhone del Hero (componente Magic UI + pantalla de la app de clínica). Usar SIEMPRE que se haga referencia al "mockup", al "iPhone", a la pantalla/maqueta del Hero o a su contenido (tiles de seguimiento, accesos rápidos, marco, colores) para editarlo de forma coherente.
---

# Skill: Mockup de iPhone (Hero)

El Hero muestra a la derecha un **mockup de iPhone** (Magic UI) con una **pantalla de
app de clínica** simulada: seguimiento de pacientes + accesos rápidos. Esta skill
documenta cómo está montado para editarlo sin romper nada.

## Archivos clave

- `src/components/magicui/Iphone.astro` — componente Magic UI (iPhone 15 Pro) portado a
  Astro estático (cero JS, sin Tailwind). Es un SVG con Dynamic Island; la pantalla a
  medida se pasa como `<slot />` y se recorta con la máscara `#screenPunch`.
- `src/components/Hero.astro` — usa `<Iphone>` con la pantalla (`.phone-screen`) dentro.
  El teléfono va en la columna `.hero-visual` con animación CSS de entrada
  (`hero-visual-in`) + flotación (`phone-float`).
- `src/styles/globals.css` — todos los estilos del mockup, en el bloque
  `/* ---------- Hero: layout de dos columnas + iPhone mockup ---------- */`
  (clases con prefijo `.ps-*` para la pantalla, `.iphone*` para el marco/posición de la
  pantalla, más `.hero-phone` / `.hero-visual`).

## Sin Tailwind

- El proyecto ya NO usa Tailwind (se eliminó junto con React/framer-motion). Todo es CSS
  plano en `globals.css`; el posicionamiento de la pantalla dentro del marco son las
  clases `.iphone`, `.iphone-screen` y `.iphone-frame` (porcentajes derivados de la
  geometría del SVG: pantalla 389.5×843.5 en marco 433×882, radio 55.75).

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
- **Marco del iPhone:** gris apagado `#4a4b55`. Para cambiarlo, editar los atributos
  `fill`/`stroke` con ese valor en `src/components/magicui/Iphone.astro` (los colores
  están inlinados en el SVG; ya no hay variantes dark de Tailwind).

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
