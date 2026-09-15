/* =========================================================
   পুজোর সাথী — Live clock
   ========================================================= */

PS.clock = (function () {
  const el = () => document.querySelector("#liveClock .clock-time");
  const dayPartEl = () => document.getElementById("dayPartLabel");

  function dayPartLabel(hour) {
    if (hour < 5) return "গভীর রাত";
    if (hour < 8) return "ভোর হচ্ছে";
    if (hour < 12) return "সকালের আলো";
    if (hour < 16) return "দুপুরের রোদ";
    if (hour < 18) return "বিকেলের হাওয়া";
    if (hour < 21) return "সন্ধ্যা নামছে";
    return "রাতের উৎসব";
  }

  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function tick() {
    const now = new Date();
    const h = now.getHours();
    const timeStr = `${pad(h % 12 === 0 ? 12 : h % 12)}:${pad(now.getMinutes())} ${h < 12 ? "AM" : "PM"}`;

    const timeEl = el();
    if (timeEl) timeEl.textContent = PS.toBanglaDigits(timeStr);

    const partEl = dayPartEl();
    if (partEl) partEl.textContent = dayPartLabel(h);
  }

  function init() {
    tick();
    setInterval(tick, 1000 * 30); // minute-precision display, cheap to update
  }

  return { init };
})();
