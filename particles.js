/* =========================================================
   পুজোর সাথী — Floating shiuli petals
   Lightweight DOM + CSS animation, no canvas needed.
   ========================================================= */

PS.particles = (function () {
  const layer = () => document.getElementById("petalLayer");

  const PETAL_SVG = (color) => `
    <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C15 6 20 9 20 14C20 18.5 16.5 22 12 22C7.5 22 4 18.5 4 14C4 9 9 6 12 2Z" fill="${color}" fill-opacity="0.8"/>
      <path d="M12 4.5C11.5 11 12 17 12 21" stroke="${color}" stroke-opacity="0.4" stroke-width="0.6"/>
    </svg>`;

  const COLORS = ["var(--marigold)", "var(--marigold-soft)", "var(--sindoor)"];
  const MAX_PETALS = 16;

  function spawnPetal() {
    const host = layer();
    if (!host) return;

    const petal = document.createElement("div");
    petal.className = "petal";

    const size = 10 + Math.random() * 14;
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 10;
    const drift = (Math.random() - 0.5) * 160;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    petal.style.left = left + "vw";
    petal.style.width = size + "px";
    petal.style.height = size + "px";
    petal.style.setProperty("--drift", drift + "px");
    petal.style.animationDuration = duration + "s";
    petal.style.animationDelay = -(Math.random() * duration) + "s";
    petal.innerHTML = PETAL_SVG(color);

    host.appendChild(petal);
  }

  function init() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    for (let i = 0; i < MAX_PETALS; i++) {
      spawnPetal();
    }
  }

  return { init };
})();
