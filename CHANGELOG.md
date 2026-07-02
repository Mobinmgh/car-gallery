# Changelog

One line per builder step: what was built, and any deviation from AGENTS.md and why.

- **Setup** — Initialized git repo and npm project; vendored GSAP 3.15.0 core + ScrollTrigger as plain `<script>` tags (no bundler); self-hosted Vazirmatn (variable, via the `vazirmatn` npm package) and Big Shoulders Display (variable, via `@fontsource-variable/big-shoulders-display`) as woff2, both OFL-licensed; built RTL-aware reset using logical CSS properties; set up the full token system as CSS custom properties in `css/tokens.css`.
