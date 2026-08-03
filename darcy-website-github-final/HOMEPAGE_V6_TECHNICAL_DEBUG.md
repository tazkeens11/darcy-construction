# Homepage V6 — Technical Rendering Debug

## Scope

Technical-only remediation of the local Homepage V6 render. No layout, spacing, colour, typography choices or content architecture were changed.

## Root causes found

1. Homepage photography referenced legacy remote WordPress paths. Those paths returned 404 for the current Darcy site, so the browser displayed broken-image alternative text.
2. The local project had no project photography assets. Opening the page through `file://` also made external font loading unreliable, which explained the inconsistent font fallback seen during review.
3. The available scripts and stylesheets are present, but this environment has no JavaScript runtime or browser binary available for an automated rendering pass.

## Fixes applied

- Added five self-hosted, currently published Darcy image assets under `assets/project/`.
- Updated the V6 static fallback and V6 renderer to use those local assets.
- Updated the hero preload to use the local hero image.
- Self-hosted the existing DM Sans (400–700) and Newsreader (400–500) fonts under `assets/fonts/` with `font-display: swap`.
- Added the V6 font-face declarations without changing the selected font families or weights.

## Asset audit

| Asset group | Result |
| --- | --- |
| V6 project images | Local, non-empty JPEGs; explicit dimensions retained |
| Logo and favicon | Existing local WebP/PNG files present |
| CSS files referenced by `index.html` | Present |
| JavaScript files referenced by `index.html` | Present |
| Homepage font files | Local TTF files present |
| Legacy remote image references | Remain only in unused V2/V4 renderer definitions; V6 does not use them |

## Validation limits

- `python3 -m http.server` could not bind in the restricted environment (`PermissionError: Operation not permitted`).
- Chrome, Safari and Edge binaries are not installed in this execution environment, so visual screenshots and browser-console verification must be completed locally using an HTTP server.

## Local verification

From this folder, serve the site over HTTP (not `file://`):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` and verify the hero, Who We Are image, selected projects and closing image. The same local paths will work on Cloudflare Pages.

## Remaining blocker

The only remaining verification step is browser-based confirmation in Chrome/Safari/Edge. No confirmed code-level asset failure remains in the V6 homepage path.
