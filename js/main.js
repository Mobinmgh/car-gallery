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
