document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  playButton.addEventListener('click', () => {
    console.log('Play button clicked');
  });

  pauseButton.addEventListener('click', () => {
    console.log('Pause button clicked');
  });

  prevButton.addEventListener('click', () => {
    console.log('Previous button clicked');
  });

  nextButton.addEventListener('click', () => {
    console.log('Next button clicked');
  });
});
