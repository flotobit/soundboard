document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-sound]');

  buttons.forEach(button => {
    const audio = new Audio(button.dataset.sound);

    button.addEventListener('click', () => {
      // Rewind and play sound on each click
      audio.currentTime = 0;
      audio.play();
    });
  });
});

