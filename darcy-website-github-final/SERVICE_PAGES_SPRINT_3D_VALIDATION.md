# Sprint 3D — Service Pages Validation

## Completed routes

- `/what-we-do/pre-construction-planning/`
- `/what-we-do/design-build/`
- `/what-we-do/main-contracting/`
- `/what-we-do/construction-management/`
- `/what-we-do/project-management/`
- `/what-we-do/refurbishment-alterations/`

All six routes use the same route-aware service template. The existing `/what-we-do/` overview now links to all six pages.

## Template coverage

Every service page contains:

1. Hero and service promise
2. Service overview
3. Who the service is for
4. What the service includes
5. How Darcy delivers it (Meet → Understand → Plan → Build → Support)
6. Key client benefits
7. Relevant sectors
8. Relevant published case studies
9. Approval-gated evidence note
10. Start a Conversation CTA

## Evidence controls

- Copy is based on the approved Darcy positioning, current service material and published project evidence.
- No service statistics, accreditations, qualifications, contract values or unsupported outcomes were added.
- Extensions and Developments are not presented as completed service pages. They remain future, approval-gated routes until Darcy supplies enough verified service and project evidence.
- Service-specific fees, appointment scopes, contract forms, programme examples and photography remain approval-gated.

## Accessibility and responsive checks

- Each template has one route H1 with `tabindex="-1"` for SPA focus movement.
- Section headings are labelled with `aria-labelledby`.
- Interactive service, sector and case-study links have descriptive text and visible focus states from the existing design system.
- The five-stage process becomes a vertical sequence on small screens, avoiding horizontal page overflow.
- Grids collapse at tablet and mobile breakpoints.
- Existing reduced-motion rules remain active.

## Validation performed

- `site-enhancements.js` and `pages.min.js` pass Node syntax checks.
- Sitemap XML parses successfully and includes all six approved service URLs.
- Production route catalogue includes all six service routes.
- Required template landmarks and headings are present in the renderer.
- No new external assets were introduced by the service renderer.
- No deployment, DNS or GitHub changes made.
