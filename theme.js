/* =========================================================
   পুজোর সাথী — Shared namespace + theme (day/night) logic
   All modules attach to window.PS so nothing pollutes globals.
   ========================================================= */

window.PS = window.PS || {};

/* Convert Latin digits to Bengali digits, e.g. "17:05" -> "১৭:০৫" */
PS.toBanglaDigits = function toBanglaDigits(value) {
  const map = { 0: "০", 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯" };
  return String(value).replace(/[0-9]/g, (d) => map[d]);
};

PS.theme = (function () {
  const STORAGE_KEY = "pujor-sathi-theme";
  const root = document.documentElement;

  function prefersNight() {
    const hour = new Date().getHours();
    // Day theme roughly 6am–6pm, night theme (sandhya aarti mood) otherwise.
    return hour < 6 || hour >= 18;
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    const icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = theme === "day" ? "☀️" : "🌙";
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const theme = saved || (prefersNight() ? "night" : "day");
    apply(theme);

    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        const next = current === "day" ? "night" : "day";
        apply(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    }

    // If the user never manually overrides, keep re-checking so the site
    // quietly shifts from day to night mood as real time passes.
    setInterval(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        apply(prefersNight() ? "night" : "day");
      }
    }, 60 * 1000);
  }

  return { init };
})();
