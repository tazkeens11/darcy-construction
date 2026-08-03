# Cloudflare Production Readiness Audit

Date: 2026-07-22

## Scope

Static SPA, direct-refresh routing, content evidence, contact submission, headers, redirects, sitemap, schema, accessibility and asset references.

## Status

Development package: **AMBER — ready for Cloudflare preview deployment**.

Production domain: **not connected**.

## Completed

- Framework/build audit: framework-free static SPA; no build command; output `.`.
- Removed Netlify configuration and Netlify Forms markup.
- Added Cloudflare Pages `wrangler.toml`.
- Added Pages Function at `functions/api/contact.js`.
- Added URL-encoded contact submission, validation and honeypot handling.
- Added direct-refresh route mapping and SPA fallback redirect.
- Added verified Darcy content for About, Services, Projects and Contact.
- Added Privacy and Cookie routes using the official privacy evidence and an approval gate for cookie configuration.
- Replaced Unsplash references in the production JavaScript bundles with published Darcy project imagery.
- Added static LocalBusiness JSON-LD with verified company contact/address data.
- Removed the staging `noindex` header from the production artifact.
- JavaScript syntax, sitemap XML and function validation passed.

## Approval/credential gates

- `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` are required before the form can send.
- Cookie inventory, consent wording and retention periods require final approval against production analytics.
- Published Darcy image URLs are verified evidence but remain remote; self-hosting them is recommended before launch.
- Full case-study facts, permissions and testimonials remain subject to the existing Content Integrity rules.

## Cloudflare deployment

Use this folder as the Pages project root. Leave the build command blank and set the output directory to `.`. Configure the variables in `README.md`, deploy to a `pages.dev` preview, then verify every direct route and `/api/contact` before adding the live domain.
