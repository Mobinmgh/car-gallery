gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

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
    duration: 0.9,
    ease: "power3.out",
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
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      }
    );
  });
})();
