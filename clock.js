/* =========================================================
   পুজোর সাথী — Live Clock
   Bengali Puja Edition
   ========================================================= */

PS.clock = (function () {

  const getClockEl = () =>
    document.querySelector("#liveClock .clock-time");

  const getDayPartEl = () =>
    document.getElementById("dayPartLabel");

  const getDateEl = () =>
    document.getElementById("liveDate");

  /* -------------------------
     Bengali day-part labels
     ------------------------- */

  function dayPartLabel(hour) {
    if (hour < 5) return "গভীর রাত";
    if (hour < 8) return "ভোরের আলো";
    if (hour < 12) return "সকালের রোদ";
    if (hour < 16) return "দুপুরের আবেশ";
    if (hour < 18) return "বিকেলের হাওয়া";
    if (hour < 21) return "সন্ধ্যার প্রদীপ";
    return "রাতের উৎসব";
  }

  /* -------------------------
     Bengali AM / PM
     ------------------------- */

  function banglaMeridiem(hour) {
    return hour < 12 ? "পূর্বাহ্ণ" : "অপরাহ্ণ";
  }

  /* -------------------------
     Two digit formatter
     ------------------------- */

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  /* -------------------------
     Bengali date
     ------------------------- */

  function formatDate(date) {

    const days = [
      "রবিবার",
      "সোমবার",
      "মঙ্গলবার",
      "বুধবার",
      "বৃহস্পতিবার",
      "শুক্রবার",
      "শনিবার"
    ];

    const months = [
      "জানুয়ারি",
      "ফেব্রুয়ারি",
      "মার্চ",
      "এপ্রিল",
      "মে",
      "জুন",
      "জুলাই",
      "আগস্ট",
      "সেপ্টেম্বর",
      "অক্টোবর",
      "নভেম্বর",
      "ডিসেম্বর"
    ];

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  /* -------------------------
     Update clock
     ------------------------- */

  function tick() {

    const now = new Date();

    const hour24 = now.getHours();

    const hour12 =
      hour24 % 12 === 0
        ? 12
        : hour24 % 12;

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    const timeString =
      `${pad(hour12)}:${pad(minutes)}:${pad(seconds)}`;

    /* Clock */

    const clockEl = getClockEl();

    if (clockEl) {
      const banglaTime =
        PS.toBanglaDigits(timeString);

      clockEl.textContent =
        `${banglaTime} ${banglaMeridiem(hour24)}`;
    }

    /* Day part */

    const dayPartEl = getDayPartEl();

    if (dayPartEl) {
      dayPartEl.textContent =
        dayPartLabel(hour24);
    }

    /* Date — optional */

    const dateEl = getDateEl();

    if (dateEl) {
      dateEl.textContent =
        PS.toBanglaDigits(formatDate(now));
    }
  }

  /* -------------------------
     Initialize
     ------------------------- */

  function init() {

    tick();

    /* Update every second */

    setInterval(tick, 1000);
  }

  return {
    init
  };
<div id="liveDate" class="live-date"></div>
})();
