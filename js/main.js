gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Single easing curve + timing scale for every animation on the page. This
// is what keeps a full motion pass reading as one coherent system instead of
// a pile of unrelated effects — every new animation below reaches into this,
// nothing hand-rolls its own ease/duration.
const MOTION = {
  ease: "power3.out",
  duration: { fast: 0.3, base: 0.6, slow: 0.9 },
  scrub: 0.6,
};

// Smooth scroll, wired to GSAP's ScrollTrigger so every scroll-scrubbed
// animation below tracks Lenis's smoothed position instead of the raw wheel
// event. Skipped entirely under reduced motion — native (instant) scroll
// takes over rather than trying to tone the smoothing down.
(function initSmoothScroll() {
  if (prefersReducedMotion || typeof Lenis === "undefined") return;

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
})();

// Nav: solid panel after scrolling past the transparent-over-hero zone.
(function initNav() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 80);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = nav.querySelector(".nav__toggle");
  const mobileMenu = document.getElementById("nav-mobile-menu");
  if (!toggle || !mobileMenu) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
})();

// Hero load-in: one orchestrated stagger, priority #1 in the motion budget.
(function initHero() {
  const items = document.querySelectorAll("[data-hero-in]");
  if (!items.length) return;

  if (prefersReducedMotion) {
    gsap.set(items, { opacity: 1, y: 0 });
    return;
  }

  gsap.set(items, { opacity: 0, y: 24 });
  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: MOTION.duration.slow,
    ease: MOTION.ease,
    stagger: 0.12,
    delay: 0.2,
  });
})();

// Route-line: the page's signature scroll-linked sweep, priority #2 in the
// motion budget. Shared by every "stop" section (3 through 9) — reduced
// motion just hides the sweep entirely via CSS, so there's nothing to do here.
(function initRouteLines() {
  if (prefersReducedMotion) return;

  document.querySelectorAll("[data-route-line]").forEach((line) => {
    const track = line.querySelector(".route-line__track");
    const sweep = line.querySelector(".route-line__sweep");
    if (!track || !sweep) return;

    gsap.fromTo(
      sweep,
      { x: () => track.offsetWidth + sweep.offsetWidth },
      {
        x: () => -sweep.offsetWidth,
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
          end: "bottom 15%",
          scrub: MOTION.scrub,
          invalidateOnRefresh: true,
        },
      }
    );
  });
})();

// The Floor: each card's photo scales down slightly and sharpens from a
// blur as it centers in the viewport - a rack-focus moment per card, not a
// plain fade-in. Targets the <img> inside the fixed-size media frame (not
// the frame itself) so the grid layout never shifts.
(function initFloorCardFocus() {
  if (prefersReducedMotion) return;

  document.querySelectorAll(".floor-card__media img").forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 1.06, filter: "blur(10px)" },
      {
        scale: 1,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "center center",
          scrub: MOTION.scrub,
        },
      }
    );
  });
})();
