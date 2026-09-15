/* =========================================================
   পুজোর সাথী — Countdown to Maha Shashthi
   To change the target next year, just edit TARGET_ISO below.
   ========================================================= */

PS.countdown = (function () {
  // Maha Shashthi 2026 (formal start of pandal-hopping), fixed to IST.
  const TARGET_ISO = "2026-10-17T00:00:00+05:30";

  const ids = { d: "cdDays", h: "cdHours", m: "cdMinutes", s: "cdSeconds" };

  function pad2(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function tick() {
    const target = new Date(TARGET_ISO).getTime();
    const now = Date.now();
    let diff = Math.max(0, target - now);

    const day = Math.floor(diff / 86400000);
    diff -= day * 86400000;
    const hour = Math.floor(diff / 3600000);
    diff -= hour * 3600000;
    const min = Math.floor(diff / 60000);
    diff -= min * 60000;
    const sec = Math.floor(diff / 1000);

    const set = (id, val) => {
      const node = document.getElementById(id);
      if (node) node.textContent = PS.toBanglaDigits(pad2(val));
    };

    set(ids.d, day);
    set(ids.h, hour);
    set(ids.m, min);
    set(ids.s, sec);
  }

  function init() {
    tick();
    setInterval(tick, 1000);
  }

  return { init };
})();
