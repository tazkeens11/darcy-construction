# Launch Plan

1. **Freeze and approve** — freeze approved code and design; record content, image and legal approvals in the registers.
2. **Complete evidence** — resolve project facts, testimonials, leadership material, service evidence and image permissions.
3. **Production configuration** — set Cloudflare Pages project, production domain, Resend credentials, analytics consent configuration, headers and environment variables.
4. **Deploy candidate** — deploy the approved release to staging; keep staging `noindex` and disconnected from the live domain.
5. **Run final QA** — complete the Final QA Checklist on real devices and current browsers; resolve critical defects only.
6. **Backup and rollback point** — record the approved deployment ID, export configuration and retain the previous production deployment for instant rollback.
7. **Production deploy** — deploy the signed-off artifact to Cloudflare Pages and connect the production domain/DNS only after approval.
8. **Live verification** — check HTTPS, routes, forms, headers, metadata, schema, sitemap, robots, analytics consent and 404 behaviour.
9. **Search launch** — remove production noindex, submit sitemap in Search Console and request indexing for priority pages.
10. **First 48 hours** — monitor uptime, form delivery, 404s, redirects, Search Console, analytics consent, Core Web Vitals and error logs.
11. **Rollback if required** — if a critical route, form, security or indexing issue appears, restore the recorded previous deployment, preserve evidence and repeat validation before redeploying.

## Production dependencies

- Production domain and DNS access.
- Resend API key, verified sender and recipient configuration.
- Analytics measurement ID and consent wording.
- Search Console verification.
- Approved imagery, testimonials, biographies and legal policies.
