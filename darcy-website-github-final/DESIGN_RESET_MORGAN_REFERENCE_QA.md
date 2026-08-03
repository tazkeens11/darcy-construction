# Design Reset — Morgan Sindall Reference QA

## Scope of this review build

Only the homepage, shared header/footer shell and one case-study presentation layer have been updated. Routes, content, metadata, forms and the approved design-system foundations remain intact.

## Principles adopted

- A disciplined maximum-width container and consistent page gutters.
- Clear full-width surface changes between sections.
- Stronger type scale with constrained editorial measures.
- Fewer repeated card treatments; featured work uses a magazine-style grid.
- A restrained, professional header with clear active-state treatment.
- Footer hierarchy separated into lead, navigation and legal bands.
- Case-study pages use alternating narrative surfaces, a clear facts band and a larger gallery rhythm.
- Mobile layouts collapse intentionally rather than compressing desktop grids.

## Removed from the rejected visual reset

- The `.homepage-reset` presentation layer and its cascade guard.
- The `.about-reset` presentation layer introduced for the previous review build.
- The old homepage section-reordering dependency.
- The previous mixed section surfaces and repeated-card overrides used by that rejected pass.

The replacement is a dedicated `homepage-rebuild.css` system with unique `dh2-*` components and a new homepage renderer.

## Darcy identity preserved

- Darcy’s charcoal, warm neutral and orange palette remains the source of truth.
- Relationship-led language and verified-content rules are unchanged.
- No Morgan Sindall copy, branding, assets or exact layouts were copied.

## Static validation

- `site-enhancements.js` syntax: pass.
- Existing production scripts: pass.
- Required shell, homepage and case-study classes: pass.
- Required project assets and route files: present.
- No deployment, DNS or GitHub changes made.

## Screenshot status

Automated screenshot capture was unavailable in this local session because the browser runtime and Chromium executable were not available. Desktop, tablet and mobile visual approval remains intentionally outstanding.

## Approval gate

Stop here for review. Do not apply the new presentation layer to About, services, sectors or other case studies until the homepage, shell and representative case study are visually approved.
