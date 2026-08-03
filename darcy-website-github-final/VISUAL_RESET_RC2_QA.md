# Visual Reset RC2 — Local QA

## Scope

This pass updates only the homepage and the About page as the representative internal page. Other routes retain their existing presentation until visual approval is given.

## Changes made

- Added a single homepage presentation class and deterministic section order:
  Hero → Trust → Introduction → Why Darcy → Featured Projects → Services → Sectors → Process → Leadership → Evidence/Testimonials → CTA.
- Added a final cascade guard so the visual reset wins over legacy minified presentation rules without deleting legacy CSS.
- Established constrained project, service and sector grids with intentional desktop, tablet and mobile variants.
- Added stronger surface separation: white, warm, charcoal and orange bands.
- Standardised content measures and balanced heading widths.
- Replaced repeated card treatment in the project and sector groups with editorial grid rules.
- Added a restrained visual treatment for the About page using the same container and surface rhythm.
- Preserved routes, forms, metadata, reduced-motion support and verified content.
- Applied document-level overflow protection through scoped app presentation rules; no sideways scrolling should be introduced by the new grids.

## Responsive acceptance matrix

| Width | Expected result |
|---|---|
| 1440px | 12-column editorial project grid; aligned section headers; wide whitespace. |
| 1280px | Same grid with constrained content measure and no stretched copy. |
| 1024px | Two-column project/sector groups; service rows remain readable. |
| 768px | Tablet grid collapses intentionally; process remains usable without page overflow. |
| 390px | Single-column project/sector groups, full-width imagery, 44px interactions. |

## Screenshot status

Automated visual-browser capture was not available in the current local session (no browser runtime or local Chromium executable). No screenshots are being represented as completed. The page is prepared for the requested desktop/tablet/mobile visual approval pass.

## Remaining visual review

- Confirm image focal points once final Darcy-owned photography is supplied.
- Confirm exact heading wraps on real Safari and Chrome renders.
- Approve the homepage rhythm before applying the reset to the remaining internal routes.
