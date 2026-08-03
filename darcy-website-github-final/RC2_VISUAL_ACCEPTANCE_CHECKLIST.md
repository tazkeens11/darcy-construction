# RC2 Visual Acceptance Checklist

Use this checklist against the Cloudflare Pages staging preview before production approval. A checked local item is not a substitute for real-device verification.

## Route coverage

- [ ] Homepage
- [ ] About / Our Story
- [ ] What We Do
- [ ] Construction Management
- [ ] Refurbishment
- [ ] Projects index
- [ ] Sozo Ministries Conference Hall
- [ ] Pauncefoot House
- [ ] Canada Common
- [ ] Farleigh School
- [ ] Contact
- [ ] Unknown route shows the branded 404 page

## Visual hierarchy and layout

- [ ] Sections have clear surface or rule separation.
- [ ] Each page has one dominant heading and a clear next action.
- [ ] Adjacent sections do not blend into one another.
- [ ] Projects use consistent aspect ratios, captions and clickable areas.
- [ ] Service content is editorial and not an undifferentiated card wall.
- [ ] CTA styling and placement are consistent across routes.
- [ ] No clipping, horizontal overflow or unexpected scrollbars.

## Viewport matrix

- [ ] 1440px desktop
- [ ] 1280px laptop
- [ ] 1024px tablet landscape
- [ ] 768px tablet
- [ ] 390px mobile
- [ ] 360px mobile

## Interaction and accessibility

- [ ] Header links and mobile menu work with keyboard and touch.
- [ ] Focus indicators remain visible on links, buttons, cards and form controls.
- [ ] Skip link, landmarks and heading order are correct.
- [ ] Route changes move focus to the page heading and announce the page.
- [ ] Contact validation, success and failure states are understandable.
- [ ] Reduced-motion preference suppresses non-essential animation.
- [ ] 200% zoom and narrow reflow remain usable.

## Technical and search regression

- [ ] No console errors or failed asset requests.
- [ ] Route-aware title, description, canonical and social metadata are present.
- [ ] JSON-LD remains valid and matches visible content.
- [ ] `/sitemap.xml` and `/robots.txt` return successfully.
- [ ] Preview remains protected from indexing.
- [ ] Direct refresh works for every production route.

## Browser matrix

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

## Deployment-dependent checks

- [ ] Configure approved Resend environment variables.
- [ ] Submit a controlled contact enquiry and confirm receipt.
- [ ] Verify Cloudflare Pages Function logs and response handling.
- [ ] Complete real iOS/Android device checks before production approval.

