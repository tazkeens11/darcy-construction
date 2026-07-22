# Darcy Construction — Cloudflare Pages

## Project type

This is a framework-free static SPA. There is no package manager or compile step.

- Build command: none (leave blank)
- Build output directory: `.` (the project root containing `index.html`)
- Functions: `functions/`
- Configuration: `wrangler.toml`

The existing UI, routes, metadata, sitemap, robots rules, headers and redirects are retained. `_redirects` and `_headers` are supported by Cloudflare Pages for static deployments. No `noindex` header is included in this production artifact.

## Cloudflare Pages deployment

1. Create a Pages project in Cloudflare.
2. Connect the repository or upload this folder directly.
3. Set the production branch to the approved branch.
4. Leave the build command blank.
5. Set the output directory to `.`.
6. Set the Functions directory to `functions` if the dashboard exposes that option.
7. Deploy and test the generated `pages.dev` preview URL before connecting any custom domain.

For Wrangler-based deployment, install Wrangler and run from this folder:

```sh
npx wrangler pages deploy . --project-name darcy-construction
```

## Environment variables

Configure these as encrypted Cloudflare Pages variables/secrets; do not commit values:

- `RESEND_API_KEY` — Resend API key for enquiry delivery.
- `CONTACT_TO_EMAIL` — Darcy inbox receiving enquiries.
- `CONTACT_FROM_EMAIL` — verified sender address on the approved sending domain.
- `DARCY_ANALYTICS_PROVIDER` — optional, e.g. `ga4`.
- `DARCY_ANALYTICS_MEASUREMENT_ID` — optional measurement ID.
- `DARCY_ANALYTICS_CONSENT_REQUIRED` — `true` unless approved otherwise.

The contact endpoint returns success only after the email provider returns HTTP 2xx. It returns 503 until the contact variables are configured, so it cannot display a false success state.

## Route and launch checks

Test direct refreshes for `/`, `/our-story/`, `/our-approach/`, `/what-we-do/`, `/sectors/`, `/projects/`, each approved project URL, `/contact/`, `/privacy/`, `/cookies/` and an unknown URL. Also test `/api/contact` with valid and invalid form data, the sitemap, robots, headers, keyboard navigation and mobile menu before connecting a domain.
