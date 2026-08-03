# Darcy Design Rebuild v4 — Homepage Review Build

## Direction

Concept B — Confidence First.

The homepage now follows the locked sequence:

Header → Hero → Company Introduction → Why Darcy → Featured Projects → Services → Sectors → Client Evidence → Contact CTA → Footer.

## Layout system

- One maximum content width: 84rem.
- One responsive gutter token.
- A consistent two-column editorial grid for section headings and content.
- A 12-column project grid on desktop, two columns on tablet and one column on mobile.
- Shared vertical section rhythm using one responsive spacing scale.
- No floating cards, decorative gradients, or overlapping content panels.

## Colour system

- Darcy navy: dominant header, footer, services and CTA colour.
- White: primary content surface.
- Warm stone: introduction and sectors surface.
- Light grey: client evidence surface.
- Muted construction green: labels, links, active states and small accents.
- Darcy gold: CTA and small proof highlights only.

## Typography

- One serif display family for headings.
- One sans-serif family for body and interface text.
- Controlled responsive heading scale using `clamp()`.
- Constrained text measures and balanced headings.
- Consistent uppercase metadata labels.

## Components used

- Existing header and footer shell, restyled through the v4 system.
- Full-width hero.
- Editorial project links.
- Text-led service rows.
- Text-led sector rows.
- Proof-point list.
- Evidence block.
- Single CTA treatment.

## Components removed from homepage

- Previous homepage reset presentation layer.
- Repeated outcome-card presentation.
- Mixed beige/grey/white section overrides.
- Floating or overlapping visual treatments.
- Separate testimonial and evidence card groups.
- Obsolete `homepage-rebuild.css` stylesheet.

## Validation

- JavaScript syntax checks passed.
- Required homepage sections present in the new renderer.
- New stylesheet referenced from `index.html`.
- Existing routes, forms, metadata, sitemap and robots files preserved.
- No deployment or GitHub changes made.

## Alignment correction

- Header and header-inner are now fixed to a 72px rhythm.
- Logo is constrained to a 112×42px desktop box and 100×38px mobile box.
- Mobile navigation opens at the corrected 72px header edge.
- Introduction, sectors and evidence surfaces were moved toward white/light grey for a cleaner presentation.

## Screenshot status

Desktop, tablet and mobile screenshot capture is unavailable in this session because no browser runtime or local Chromium executable is available. The build is stopped here for visual approval before any internal page changes.
