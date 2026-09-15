/* =========================================================
   পুজোর সাথী — Navigation behaviour
   ========================================================= */

PS.nav = (function () {
  function initStickyNav() {
    const nav = document.getElementById("siteNav");
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileDrawer() {
    const toggle = document.getElementById("menuToggle");
    const drawer = document.getElementById("mobileDrawer");
    if (!toggle || !drawer) return;

    const close = () => {
      drawer.classList.remove("is-open");
      document.body.classList.remove("drawer-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    const open = () => {
      drawer.classList.add("is-open");
      document.body.classList.add("drawer-open");
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", () => {
      drawer.classList.contains("is-open") ? close() : open();
    });

    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  function initVeilTransition() {
    const veil = document.getElementById("veil");
    if (!veil) return;

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        veil.classList.add("is-active");
        window.setTimeout(() => veil.classList.remove("is-active"), 350);
      });
    });
  }

  function init() {
    initStickyNav();
    initMobileDrawer();
    initVeilTransition();
  }

  return { init };
})();
