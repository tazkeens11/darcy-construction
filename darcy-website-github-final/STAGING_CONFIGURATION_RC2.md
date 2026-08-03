# RC2 Cloudflare Pages Staging Configuration

This is the configuration for a staging preview only. Do not connect the Darcy production domain or change DNS during RC2 acceptance.

## Project settings

| Setting | Value |
|---|---|
| Framework preset | None / Static HTML |
| Root directory | Repository root (the folder containing `index.html`) |
| Build command | Leave blank; this is a pre-built static package |
| Build output directory | `.` |
| Functions directory | `functions/` (Cloudflare Pages Functions) |
| Node version | Node 18+ if the dashboard requires a runtime; no build-time Node step is required |
| Preview URL | Cloudflare `pages.dev` preview URL only |
| Production branch | Keep disconnected from the custom production domain until staging sign-off |

## Required environment variables

Set these only in the staging project when the corresponding service is ready. Never commit values.

- `RESEND_API_KEY` — required for live email delivery.
- `CONTACT_TO_EMAIL` — approved Darcy recipient address.
- `CONTACT_FROM_EMAIL` — verified sending address/domain in Resend.

Optional analytics and consent variables may remain unset for staging unless separately approved. See `.env.example` and `CLIENT_HANDOVER_CHECKLIST.md`.

## Platform files

- `_headers` supplies security, cache and staging response headers, including `X-Robots-Tag: noindex, nofollow, noarchive`.
- `_redirects` supplies SPA fallback and verified legacy mappings.
- `wrangler.toml` documents the Pages project and Functions compatibility.
- `sitemap.xml` and `robots.txt` are deployed as static root assets.

## Staging safeguards

- Use only the `pages.dev` preview URL for acceptance.
- Keep staging noindex protection enabled through the configured response header.
- Remove or override the staging `X-Robots-Tag` before production launch so the public Darcy domain can be indexed.
- Do not replace production canonicals or add the preview URL to the production sitemap.
- Do not attach the custom Darcy domain or make DNS changes until staging and real-device checks pass.
