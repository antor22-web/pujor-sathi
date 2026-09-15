/* =========================================================
   পুজোর সাথী — Puja radio player
   Wire your own audio file into the <audio id="pujaAudio"> tag
   in index.html (see the comment right above it). Until then
   this still runs as a working UI with a silent track.
   ========================================================= */

PS.player = (function () {
  function init() {
    const wrap = document.getElementById("player");
    const toggleBtn = document.getElementById("playerToggle");
    const icon = document.getElementById("playIcon");
    const audio = document.getElementById("pujaAudio");
    const volume = document.getElementById("volumeRange");

    if (!wrap || !toggleBtn || !audio) return;

    let playing = false;

    function setPlaying(next) {
      playing = next;
      wrap.classList.toggle("is-playing", playing);
      icon.textContent = playing ? "❚❚" : "▶";
      toggleBtn.setAttribute("aria-label", playing ? "থামান" : "চালান");
    }

    toggleBtn.addEventListener("click", () => {
      if (playing) {
        audio.pause();
        setPlaying(false);
        return;
      }
      // audio.play() rejects if no source is set yet — fail quietly
      // and still reflect the intended state in the UI.
      const result = audio.play();
      if (result && typeof result.catch === "function") {
        result.catch(() => {});
      }
      setPlaying(true);
    });

    if (volume) {
      audio.volume = Number(volume.value) / 100;
      volume.addEventListener("input", () => {
        audio.volume = Number(volume.value) / 100;
      });
    }
  }

  return { init };
})();
