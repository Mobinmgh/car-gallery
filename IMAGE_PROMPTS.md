# Image & Video Prompts

Logged in build order, tagged by section number, per AGENTS.md. No placeholders ship — every real photo/video need is written here as an exact generation prompt until it's sourced.

## Section 2 — Hero
**Status:** SOURCED — `assets/images/hero-showroom.{webp,jpg}` (optimized from a client-provided, watermark-free source, 1408x768 original, 637KB → 42KB webp / 59KB jpg at q82).
**Placement:** full-bleed background behind `.hero__scrim` (`css/hero.css`); still photograph, not video — the motion budget for this page is already spent on the hero load-in and the route-line scroll sweep, and a looping background video would be a fourth flourish the brief warns against.
**Prompt (for reference / re-sourcing at a wider aspect ratio later):** A dark BMW in a deep sapphire-black paint, shot three-quarter front angle inside an unlit private showroom/parking structure at night. Single low, raking key light from the upper-left rakes across the hood and A-pillar, catching the character line in a thin chrome highlight; everything else falls into near-black shadow — the car reads as a lit sculpture, not a catalog shot. Concrete floor and pillars with a faint wet-look reflection of the undercarriage lighting. No people, no dealership signage, no visible logos beyond the kidney grille silhouette. Grain and contrast closer to a Peter Lindbergh automotive editorial than a brochure render. Composition leaves the right two-thirds of the frame darker and emptier so the hero's right-anchored Persian headline and CTA sit legibly over negative space.
**Aspect ratio delivered:** 1408x768 (~1.83:1), not the originally-requested 21:9. At this ratio, `object-fit: cover` on tall mobile viewports crops in tight from the sides — handled with `object-position: 25% center` in `.hero__media img` to keep the car (left ~60% of frame) in view across breakpoints. A first pass of this source carried an AI-generation watermark glyph in the bottom-right corner, which was only hidden by falling inside `.hero__scrim`'s darkened zone — fragile, since any future crop/scrim change could expose it. Replaced with a clean re-source that has no watermark baked into the pixels at all; the corner was checked at full resolution to confirm.

## Section 4 — The Floor
**Status:** SOURCED — all five cards now use real photos, all checked at full resolution for the AI-generation watermark that hit the hero and Design-stop sources earlier; none present on any of these five.

- **BMW 8 Series Gran Coupe** — `assets/images/floor-8-series-gran-coupe.{webp,jpg}`, 1264x848.
- **BMW M5 Competition** — `assets/images/floor-m5-competition.{webp,jpg}`, 1264x848.
- **BMW X7 M60i** — `assets/images/floor-x7-m60i.{webp,jpg}`, 1264x848.
- **BMW i7 M70 xDrive** — `assets/images/floor-i7-m70-xdrive.{webp,jpg}`, 1264x848.
- **Alpina B8 Gran Coupe** — `assets/images/floor-alpina-b8-gran-coupe.{webp,jpg}`, 1264x848 (a deep maroon/burgundy rather than the requested blue, still a deliberate departure from the other four's black/near-black paint, so the "one non-BMW-badged car" distinction still reads).

All five share the same studio treatment (infinity cove, top-down light, pure side-profile angle) the original prompt asked for, so the grid reads as one consistent shoot. Optimized with `sharp` from ~1-1.4MB PNG sources down to 20-40KB webp / 30-40KB jpg each.
**Placement:** one image per card in `.floor-card__media` (`css/the-floor.css`), `aspect-ratio: 3/2`.
**Aspect ratio:** 3:2 for all five, delivered as specified.

## Section 6 — Craftsmanship
**Status:** SOURCED — `assets/images/craft-{leather,wood,metal}.{webp,jpg}`, 1024x1024 each, optimized from ~1.4MB PNG sources down to 30-50KB webp / 47-60KB jpg. Match the brief closely: leather shows the hand blind-stitching detail with visible shadow, wood reads matte with clear open-pore grain (not glossy), metal shows brush-stroke direction under a raking light. No watermark on any of the three.
**Placement:** one square macro shot per material callout in `.craft-item__media` (`css/craftsmanship.css`), 3-up grid on desktop, stacked on mobile.
**Aspect ratio:** 1:1 for all three, delivered as specified.
