# Darcy Construction — Production Deployment Checklist

## Cloudflare Pages settings

- Framework preset: **None**
- Root directory: repository root containing `index.html`
- Build command: **blank** (static output; `npm run build` is optional)
- Output directory: `.`
- Production branch: approved main branch
- Functions directory: `functions/`

## Required environment variables

Configure as encrypted Cloudflare Pages variables/secrets:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL` (must be an approved sender on the sending domain)
- Optional analytics variables documented in `.env.example`

## Pre-deployment checks

- Confirm the production domain and canonical host.
- Confirm approved photography permissions.
- Confirm leadership portraits and biographies.
- Confirm contact inbox and Resend sender domain.
- Confirm DNS access and rollback owner.

## Post-deployment checks

- Test every public route with a direct refresh.
- Test mobile navigation and keyboard focus.
- Submit one controlled contact enquiry.
- Confirm the email receipt and truthful success state.
- Validate titles, descriptions, canonicals, Open Graph and JSON-LD.
- Validate `sitemap.xml`, `robots.txt` and redirects.
- Run Lighthouse mobile and desktop checks.
- Submit the production sitemap in Search Console.
- Monitor 404s, form failures and Core Web Vitals.

## DNS and cache

- Connect the approved production domain only after staging sign-off.
- Do not change DNS before rollback ownership is confirmed.
- Keep HTML revalidating; cache versioned `.min.*` assets immutably.
- Purge CDN cache after the first production deployment if required.
