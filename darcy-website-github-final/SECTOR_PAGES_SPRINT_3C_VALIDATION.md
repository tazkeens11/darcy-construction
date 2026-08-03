# Sprint 3C — Sector Pages Validation

## Scope

Four sector routes now use one shared, accessible editorial template. The homepage, About page and case-study system were not changed.

## Routes

- `/sectors/commercial/` — commercial evidence remains approval-gated where the current verified register does not provide a publishable project story.
- `/sectors/education/` — links to the verified Farleigh School case study.
- `/sectors/residential/` — links to Pauncefoot House and Canada Common case-study drafts.
- `/sectors/community/` — links to the verified Sozo Ministries Conference Hall case study.

## Template checks

- One route H1 with `tabindex="-1"` for SPA focus movement.
- Distinct sections: hero, overview, sector rationale, services, evidence, process and CTA.
- Every section has a labelled heading and the primary links use descriptive text.
- Service and project links use the existing production URL strategy.
- Photography remains an explicit approval-gated placeholder until Darcy-owned assets and permissions are confirmed.
- Mobile rules collapse grids and convert the process timeline to a readable vertical sequence.
- Dark process surface and warm/light content surfaces preserve the established Darcy design language.
- Reduced-motion behaviour is inherited from the design system; no new motion is required for comprehension.

## Approval-gated content

- Commercial client/project evidence, outcomes, locations and photography.
- Additional sector-specific project stories beyond those currently linked.
- Sector statistics, accreditations, dates, values and impact figures.
- Final Darcy-owned photography and image permissions for all sector routes.

## Validation performed

- JavaScript syntax: `site-enhancements.js` and `pages.min.js` pass Node `--check`.
- Four route keys are present and mapped to production sector URLs.
- All templates include the required seven sections and an accessible route heading.
- No new external assets were introduced; sector imagery uses existing placeholder treatment.
- No deployment, DNS or GitHub changes made.
