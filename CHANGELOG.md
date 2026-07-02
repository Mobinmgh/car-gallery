# Changelog

One line per builder step: what was built, and any deviation from AGENTS.md and why.

- **Setup** — Initialized git repo and npm project; vendored GSAP 3.15.0 core + ScrollTrigger as plain `<script>` tags (no bundler); self-hosted Vazirmatn (variable, via the `vazirmatn` npm package) and Big Shoulders Display (variable, via `@fontsource-variable/big-shoulders-display`) as woff2, both OFL-licensed; built RTL-aware reset using logical CSS properties; set up the full token system as CSS custom properties in `css/tokens.css`.
- **Section 1 — Nav** — Transparent-over-hero nav, solid charcoal panel + hairline border after 80px scroll; RTL layout (wordmark right, 3 links left, CTA at flow-end/leftmost); mobile collapses to a 3-hairline toggle (not a default icon font) opening a full-width panel, closes on link click or Escape. Deviation: dropped `crossorigin` from the two font `<link rel="preload">` tags — it forced an anonymous CORS-mode fetch that Chromium blocks under `file://` (origin `null`), throwing console errors even though the fonts loaded fine via `@font-face`; same-origin preload doesn't need it here.
