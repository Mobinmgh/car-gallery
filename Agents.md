# AGENTS.md — MGHBranding Portfolio: Persian Luxury BMW Gallery Landing

Portfolio piece 1 of 10. Each portfolio piece gets its own visual identity — do not reuse MGHBranding's dark-purple/orange brand kit here. This one gets its own token system, built below.

## Before writing any code

Read `/mnt/skills/.../frontend-design/SKILL.md` (or wherever it's mounted in your environment — check `/mnt/skills/public`, `/mnt/skills/user`, and any project-local skills directory) and any UI/UX skill available to you. If a skill named "ui ux pro max" or similar exists in your local setup, read it too. Follow its two-pass process: brainstorm the token system in ASCII, self-critique against the generic-AI-design defaults, revise, then build. Do this in thinking/planning output before touching a file.

## The brief

**Subject:** A private, invite-feel BMW gallery in Tehran. Not a dealership site — a showroom experience. Client is buying trust and craftsmanship, not reading a spec sheet.

**Audience:** High-net-worth Tehran buyers who already know cars. They want to feel the metal, not read a brochure.

**Page's single job:** Make the visitor feel like they just walked into the showroom at night with the cars lit like sculpture, then want to book a private viewing.

**Avoid by default:** cream/terracotta AI-design cliché, near-black-with-one-neon-accent cliché, numbered markers unless they encode a real sequence (they do here — see Signature element).

## Token system (locked — derive everything from this, don't invent outside it)

**Color:**
- `#0A0A0C` — near-black graphite, primary background
- `#16161A` — charcoal panel surface
- `#B8B8B0` — brushed aluminum, secondary text/lines
- `#1B3A5C` — deep sapphire, cool accent (German engineering)
- `#C9A227` — aged gold, warm accent (Persian opulence) — use sparingly, this is the one accent that should feel expensive
- `#EDEDE8` — off-white, primary text

**Type:**
- Persian body/UI text: Vazirmatn (variable font, self-host it, don't rely on CDN for a portfolio piece you want fast and reliable)
- Headlines and spec numbers: pair with a condensed high-contrast Latin/numeral face (engraved-dashboard feel) for any model names, specs, numerals (0-100, bhp, torque, years). Mixing Persian display copy with Latin numerals is deliberate — should read as intentional, not a font-fallback accident.

**Layout:** Full-bleed sections, generous vertical rhythm, RTL throughout (logo right, nav links left, mirror all directional logic — don't just flip text-align and call it done, check icon directions, animation directions, scroll-cue direction too).

## Stack

Vanilla HTML/CSS/JS + GSAP (core + ScrollTrigger). No framework, no build step. This is a static portfolio piece, it needs to load fast and deploy anywhere, and you've got zero reason to carry React overhead for a single landing page. If you have a real reason to deviate, say so before you do it, don't just default to what's familiar.

Self-host Vazirmatn (variable woff2) and the Latin numeral face. No Google Fonts CDN dependency for a piece meant to demo well anywhere, including on a flaky connection.

## Signature element

A horizontal "route line" — a chrome light-reflection sweep, GSAP ScrollTrigger driven — runs through the page as you scroll. Sections read as stops on a private test-drive. This is a real sequence, so section markers along the route line are earned here, unlike generic numbered cards.

## Motion direction

**Updated: full motion pass, deliberate exception to "don't animate everything."** The
original restraint rule below was right for the first pass — it stopped the
build from padding itself with flourishes. This pass is different: the goal is
award-tier polish, not restraint, and that means one deliberate signature
animation per section instead of a plain fade-in on enter. What doesn't change
is discipline — every animation shares one easing curve and one timing system
(see `js/main.js`'s `MOTION` constant), so a page with many moments still reads
as one coherent piece of motion design, not a demo reel. `prefers-reduced-motion`
is still non-negotiable for all of it.

Smooth scroll: Lenis, wired to GSAP's ScrollTrigger (`lenis.on('scroll',
ScrollTrigger.update)` + `gsap.ticker.add`), so every scroll-scrubbed animation
tracks the smoothed scroll position, not the raw wheel event.

Signature animations, one per section:
- The Floor: cards scale and sharpen into focus as they center in the viewport.
- Performance across the fleet: spec numbers count up synced to scroll position, not a timer.
- Craftsmanship: slow parallax on the material close-ups.
- Provenance: the connecting line between numbered steps draws itself on scroll, extending the route-line visual language.
- CTA buttons throughout: magnetic pull toward the cursor on hover.
- Floor cards: subtle tilt toward cursor position on hover.

Original restraint priority order (superseded above, kept for context on the
first pass's reasoning):
1. Hero load-in
2. Route-line scroll sweep
3. Restrained hover states on car cards (last, and least)

## Sections — build all of these, in this order

1. **Nav** — minimal, transparent over hero, solid on scroll. Gallery name/mark, 3-4 links max, one CTA (book viewing). RTL: logo right, links left.
2. **Hero** — full-bleed. One dominant statement (see anchor headline below, or something sharper if you find it). One supporting line, not a paragraph. Subtle scroll cue.
3. **Arrival / trust statement** — why this gallery exists: provenance, vetting, no auction-flip inventory. 2-3 sentences max. Route-line motif starts here (index 01).
4. **The Floor** — a curated grid of 4-5 cars actually in the gallery right now. Each card: image, model name, year, one headline number. No single car gets a full deep-dive here. This section's job is proving range — the visitor should see this is a gallery, not a page about one car. Route index 02.
5. **Performance across the fleet** — pull 3 cars from The Floor, show their spec numbers (0-100, top speed, horsepower, torque) side by side. Reads as "this is the caliber across the inventory," not one car's brochure. Route index 03.
6. **Craftsmanship** — cross-cut across the fleet, not one car's cabin. The interior/materials standard every car meets, illustrated with details from 2-3 different cars. Route index 04.
7. **Provenance & vetting** — the deeper trust section, not tied to any single car. Who inspects, how documentation works, why this beats an auction flip or a classified ad. This goes further than the quick Arrival statement — this is the "prove it" version, right before the sell. Route index 05.
8. **Private viewing experience** — what booking an appointment actually looks like: by-appointment only, one-on-one walkthrough, paperwork/financing handled. Dealership-specific value, not generic luxury adjectives. Route index 06.
9. **Book a viewing close** — route-line sweep converges here. One clear CTA (form or WhatsApp/Telegram/phone — pick what's realistic for a Tehran gallery), "by appointment only" framing, no clutter.
10. **Footer** — name, contact, social, minimal legal line. No design energy spent here.

Every stop from section 3 through 8 is a beat in the tour of the gallery itself — not a chapter in any single car's story. No section should ever be built around one specific model except as one card among several. If a section starts reading like a spec sheet for a single car, that's the mistake this project already made once — don't repeat it.

## Copy

Persian, confident, understated luxury — closer to how you'd talk about a bespoke suit than a car ad. No generic superlatives (بی‌نظیر, فوق‌العاده). Be specific instead.

Anchor headline (adapt or replace if you find something stronger, but this is the tone target):
> "جایی که مهندسی آلمانی به سلیقه‌ ایرانی می‌رسد."

## Images and video

Never use placeholder images or stock filler. Wherever a real photo or video is needed, write the exact generation prompt instead — subject, lighting, angle, mood, aspect ratio — so it can be sourced separately.

Log every one of these in `IMAGE_PROMPTS.md` at the project root, in build order, tagged by section number. Format:

```
## Section 4 — Design stop
**Placement:** full-bleed background, car three-quarter angle
**Prompt:** [exact prompt]
**Aspect ratio:** 16:9
```

Do not skip this step to keep moving. An unlogged image need is a section that will silently ship broken.

## Workflow: builder session → GitHub → lead review (Claude.ai)

The builder session executes step by step and pushes to GitHub. Review happens against the pushed repo directly, not through a second Claude Code session or a changelog pipeline.

**Builder session rules:**
- Work in section order (1 through 10 above), plus a setup step before section 1: install GSAP, set up the token system as CSS custom properties, self-host fonts, build the base RTL reset.
- After each section, commit to git with a message naming the section (`feat: hero section`, not `updates`) and push.
- Do not skip ahead. Do not batch multiple sections into one commit.
- No changelog file, no screenshot capture step. The repo itself is the record.

**Review happens by handing the repo URL to Claude.ai after each checkpoint.** It reads the actual source against this spec — locked tokens, motion priority order, RTL correctness, copy tone — and gives findings and exact fixes directly in chat. Paste those fixes back into the builder session yourself. No intermediate file, no second Claude Code session running in parallel.

## Quality floor (non-negotiable, don't announce it, just do it)

- Responsive down to mobile
- Visible keyboard focus states
- `prefers-reduced-motion` respected
- No color or font outside the locked token system
- RTL correctness checked on every section, not assumed from a global `dir="rtl"`