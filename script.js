function showSurprise() {
  const name = document.getElementById("nameInput").value || "Friend";
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("message").textContent = "Here’s your birthday surprise! 🎊";
  document.getElementById("wishText").textContent = `Happy Birthday, ${name}! 🎉✨`;

  // Play music
  const music = document.getElementById("music");
  music.play();

  // Confetti
  const canvas = document.getElementById("confetti-canvas");
  const confettiLauncher = confetti.create(canvas, { resize: true });

  let duration = 5 * 1000;
  let end = Date.now() + duration;

  (function frame() {
    confettiLauncher({
      particleCount: 5,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
