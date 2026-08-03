# Homepage V6 Implementation QA

## Scope

Homepage only. Internal pages, routes, forms, SEO structure, sitemap, robots and Cloudflare configuration were not changed.

## Implemented structure

1. Hero with full-width image and two CTAs.
2. Who We Are two-column introduction.
3. Two Selected Projects.
5. Our Expertise with Services and Sectors as editorial lists.
6. Why Clients Choose Darcy with five proof lines.
7. Start Your Project image-led CTA.
8. Existing structured footer.

## Imagery

Homepage image requirements are documented in `HOMEPAGE_IMAGERY_STANDARDS.md`. Existing imagery remains subject to Darcy ownership and permission approval.

## Validation

- JavaScript syntax check passed.
- V6 renderer and stylesheet markers passed.
- Homepage stylesheet is referenced from `index.html`.
- Existing routes and supporting files remain present.
- No internal-page renderer was modified.

## Latest visual correction

- Removed the Featured Project block from the rendered homepage after review.
- Rebuilt the Who We Are grid as two equal columns with explicit `min-width: 0` containment.
- Added mobile single-column reflow to prevent crossing or overlapping content.

## Remaining approval items

- Replace current project image sources with the final approved Darcy-owned image set.
- Confirm hero image, featured image, two selected project images and closing CTA image.
- Confirm image permissions and factual alt text.
- Complete browser-based responsive visual QA at 1440px, 1024px, 768px and 390px.

No deployment or GitHub push was performed.
