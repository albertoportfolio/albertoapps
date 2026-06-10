---
name: responsive
description: Guía y checklist de diseño responsive para esta landing. Usar al crear o modificar cualquier sección, layout o componente visual para garantizar que funciona en móvil, tablet y escritorio.
---

# Skill: Responsive

Reglas para mantener la landing de AlbertoApps perfectamente usable de 320px a 1440px+.

## Principios

1. **Mobile-first**: los estilos base son para móvil; las media queries (`min-width`) añaden complejidad hacia arriba, nunca al revés.
2. **Breakpoints del proyecto** (no inventar otros sin motivo):
   - `560px` — formularios pasan a 2 columnas
   - `640px` — grids de 1 → 2 columnas
   - `700px` — proyectos 2 col / footer en fila
   - `820px` — navbar de escritorio, vídeos 2 col
   - `900px` — contacto en 2 columnas
   - `1000px` — grids de 3–4 columnas
3. **Fluidez antes que breakpoints**: preferir `clamp()`, `min()`, `%`, `flex-wrap` y `grid auto-fit` a media queries adicionales.

## Checklist al tocar layout

- [ ] Probar mentalmente a 320px, 375px, 768px, 1024px y 1440px.
- [ ] Sin scroll horizontal: cuidado con anchos fijos, blobs absolutos (usar `overflow: hidden` en el contenedor) y `100vw`.
- [ ] Tipografía con `clamp(min, vw, max)` en títulos; nunca tamaños fijos grandes en móvil.
- [ ] Targets táctiles ≥ 44px de alto (botones, enlaces de menú).
- [ ] Imágenes e iframes con `max-width: 100%`; vídeos con `aspect-ratio: 16/9`.
- [ ] El menú móvil (hamburguesa) debe cerrarse al pulsar un enlace.
- [ ] Formularios: inputs a ancho completo en móvil; `font-size` ≥ 16px para evitar zoom en iOS.
- [ ] Usar `100svh` en lugar de `100vh` para alturas de pantalla completa (barras de navegador móvil).
- [ ] Respetar `prefers-reduced-motion` en animaciones nuevas.

## Verificación

Tras cambios de layout, ejecutar `pnpm build` y revisar en el navegador con DevTools en modo responsive (iPhone SE 375px y un ancho de escritorio) antes de dar por terminado.
