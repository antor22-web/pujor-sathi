/* =========================================================
   পুজোর সাথী — Boot
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  PS.theme.init();
  PS.clock.init();
  PS.countdown.init();
  PS.particles.init();
  PS.reveal.init();
  PS.nav.init();
  PS.player.init();

  // Interest chips: purely visual multi-select for now.
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => chip.classList.toggle("is-active"));
  });
});
