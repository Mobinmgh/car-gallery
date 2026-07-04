# Image & Video Prompts

Logged in build order, tagged by section number, per AGENTS.md. No placeholders ship — every real photo/video need is written here as an exact generation prompt until it's sourced.

## Section 2 — Hero
**Status:** SOURCED — `assets/images/hero-showroom.{webp,jpg}` (optimized from a client-provided, watermark-free source, 1408x768 original, 637KB → 42KB webp / 59KB jpg at q82).
**Placement:** full-bleed background behind `.hero__scrim` (`css/hero.css`); still photograph, not video — the motion budget for this page is already spent on the hero load-in and the route-line scroll sweep, and a looping background video would be a fourth flourish the brief warns against.
**Prompt (for reference / re-sourcing at a wider aspect ratio later):** A dark BMW in a deep sapphire-black paint, shot three-quarter front angle inside an unlit private showroom/parking structure at night. Single low, raking key light from the upper-left rakes across the hood and A-pillar, catching the character line in a thin chrome highlight; everything else falls into near-black shadow — the car reads as a lit sculpture, not a catalog shot. Concrete floor and pillars with a faint wet-look reflection of the undercarriage lighting. No people, no dealership signage, no visible logos beyond the kidney grille silhouette. Grain and contrast closer to a Peter Lindbergh automotive editorial than a brochure render. Composition leaves the right two-thirds of the frame darker and emptier so the hero's right-anchored Persian headline and CTA sit legibly over negative space.
**Aspect ratio delivered:** 1408x768 (~1.83:1), not the originally-requested 21:9. At this ratio, `object-fit: cover` on tall mobile viewports crops in tight from the sides — handled with `object-position: 25% center` in `.hero__media img` to keep the car (left ~60% of frame) in view across breakpoints. A first pass of this source carried an AI-generation watermark glyph in the bottom-right corner, which was only hidden by falling inside `.hero__scrim`'s darkened zone — fragile, since any future crop/scrim change could expose it. Replaced with a clean re-source that has no watermark baked into the pixels at all; the corner was checked at full resolution to confirm.

## Section 4 — The Floor
**Status:** PARTIALLY SOURCED — one of five cards uses a real photo, the rest render as CSS-only toned panels (radial charcoal/sapphire gradient, same treatment used everywhere else on the site while a photo is pending) rather than a placeholder image or stock filler.

**Card 1 — BMW 8 Series Gran Coupe (SOURCED).** `assets/images/floor-8-series-gran-coupe.{webp,jpg}`, 1264x848 (~1.49:1). Originally sourced for the single-car "Design stop" section that this rebuild removed; reused here as one card among several since it's the same real, watermark-checked asset (see prior watermark-fix note in project history) — renamed from `design-stop.*` to match its new context. Prompt for reference: a dark sapphire-black BMW 8 Series Gran Coupe shot in a minimal studio setting on a seamless dark-charcoal infinity cove (no visible floor seam or horizon line), pure profile/side-elevation angle showing the full silhouette front-to-rear, even soft top-down light, everything else falling to near-black — a museum piece, not a marketing shot.

**Cards 2-5 — not yet sourced.** Each should match Card 1's studio treatment exactly (same infinity cove, same top-down light, same pure side-profile angle, same near-black falloff) so the grid reads as one consistent shoot, not four different photographers:
- **BMW M5 Competition**, dark graphite-grey paint, otherwise identical studio treatment to Card 1.
- **BMW X7 M60i**, dark sapphire-black paint (matches the token palette's cool accent), same treatment — full SUV silhouette including roofline, nothing cropped.
- **BMW i7 M70 xDrive**, a deep bottle-green or graphite paint (distinguish it slightly from the two black/near-black cars beside it so the grid doesn't read as one repeated color), same studio treatment.
- **Alpina B8 Gran Coupe**, dark blue paint (Alpina's signature is often a distinct blue — a deliberate departure from BMW-black to signal this is the one non-BMW-badged car on the floor), same studio treatment.

**Placement:** one image per card in `.floor-card__media` (`css/the-floor.css`), `aspect-ratio: 3/2` locked (matches Card 1's real photo ratio so the grid doesn't jump once the rest are sourced).
**Aspect ratio:** 3:2 for all five, no exceptions — a mixed-ratio grid would read as sloppy inventory photos, not a curated shoot.

## Section 6 — Craftsmanship
**Status:** NOT YET SOURCED — all three render as CSS-only toned panels (same radial charcoal/sapphire gradient treatment used elsewhere on the site) until real macro photos land.
**Placement:** one square-ish macro shot per material callout in `.craft-item__media` (`css/craftsmanship.css`), 3-up grid on desktop, stacked on mobile.
- **Leather (from the BMW 8 Series Gran Coupe).** Extreme macro shot of Nappa leather on a center console, focused tight enough to show the hand blind-stitching detail at the seam; single soft raking light so the stitch texture casts a faint shadow. No full seat or console visible, just the material and the stitch line.
- **Wood (from the Alpina B8 Gran Coupe).** Extreme macro shot of open-pore walnut veneer trim, unlacquered — grain should read as matte, not glossy, with the light chosen to show the wood's texture rather than a mirror reflection.
- **Metal (from the BMW M5 Competition).** Extreme macro shot of brushed aluminum on a gearshift or pedal edge, with the brush-stroke direction of the metal visible under a raking light.
**Aspect ratio:** 1:1 for all three — square macro crops read as deliberate material samples, not incidental product photography.
