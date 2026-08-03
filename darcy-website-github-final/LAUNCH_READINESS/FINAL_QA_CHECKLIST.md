# Final QA Checklist

## Responsive and browser

- [ ] 360 / 390px mobile, 768px tablet, 1024px, 1280px and 1440px tested.
- [ ] Chrome, Safari, Firefox and Edge tested.
- [ ] No horizontal overflow, clipping or layout shift.
- [ ] Mobile navigation, touch targets and forms tested.

## Accessibility

- [ ] Keyboard-only navigation and visible focus.
- [ ] Skip link, landmarks and heading hierarchy.
- [ ] Form labels, errors, status messages and focus management.
- [ ] Colour contrast and forced-colour review.
- [ ] 200% zoom, narrow reflow and reduced-motion review.
- [ ] Screen-reader smoke test in VoiceOver and NVDA.

## Performance

- [ ] Lighthouse mobile and desktop for Home, Projects, a case study and Contact.
- [ ] LCP, INP and CLS recorded after deployment.
- [ ] Images have dimensions, responsive variants and appropriate loading.
- [ ] CSS/JS/font payloads and caching verified.

## Technical and content

- [ ] Every approved route loads directly and via navigation.
- [ ] Contact form validation, success, failure, spam protection and email delivery tested.
- [ ] No console errors, missing assets, broken links or redirect loops.
- [ ] Metadata, canonicals, schema, sitemap and robots validated.
- [ ] Analytics and consent configuration verified without exposing secrets.
- [ ] 404 recovery links work.
- [ ] Security headers, HTTPS and Cloudflare Functions reviewed.
- [ ] Client approvals recorded for imagery, testimonials, claims and legal copy.

## Launch sign-off

- [ ] Darcy content owner approval.
- [ ] Darcy director / client approval.
- [ ] Technical owner approval.
- [ ] Production deployment approval.
