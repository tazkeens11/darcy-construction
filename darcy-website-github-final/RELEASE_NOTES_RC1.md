# Darcy Construction — Release Candidate 1

## Status

Local release candidate prepared. No deployment or GitHub push has been made.

## Sprint changelog

- **Sprint 1 — Design system:** introduced the shared charcoal, warm-grey, white and Darcy-orange visual system; standardised typography, spacing, buttons, cards, focus states, responsive layouts and reduced motion.
- **Sprint 2 — Homepage:** strengthened the hero, company introduction, services outcomes, project evidence, trust messaging, testimonials and final CTA.
- **Sprint 3 — Projects:** refined the editorial project index, verified project metadata, case-study galleries, related projects and previous/next navigation.
- **Sprint 4 — Services:** standardised What We Do, Construction Management and Refurbishment into consistent landing-page structures with scope, process, evidence and CTAs.
- **Sprint 5 — Consistency:** resolved the homepage CTA dead end, aligned footer terminology, normalised route behaviour and checked shared component consistency.
- **Sprint 6 — About:** rebuilt the company story with leadership, values, health-and-safety context, sectors and trust evidence.
- **Sprint 7 — Contact:** rebuilt the enquiry journey with useful fields, accessible validation, honeypot protection, truthful states and Cloudflare Function payload support.
- **Sprint 8 — SEO:** added route-aware Open Graph and Twitter metadata, canonical safeguards and ContactPage JSON-LD while preserving verified schema.
- **Sprint 9 — Performance and accessibility:** added async image decoding, loading priorities, image error handling, form status focus management and disabled-button states.
- **Sprint 10 — RC1:** completed regression, route, form, metadata, schema, sitemap, robots, redirect, accessibility-oriented and Cloudflare compatibility checks.

## RC1 validation

- JavaScript syntax checks: passed.
- Cloudflare Contact Function checks: passed for validation, honeypot and unconfigured-service states.
- Sitemap XML parsing: passed.
- Static JSON-LD parsing: passed.
- Direct route bootstrap coverage: passed.
- Production noindex/header checks: passed.
- Local asset reference checks: passed.
- No Netlify form dependency remains.

## Known production dependencies

- Resend credentials must be configured in Cloudflare Pages.
- Final approved photography and leadership portraits remain client-supplied items.
- Final browser/device and Lighthouse testing must be completed after deployment.
