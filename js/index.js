const revealButton = document.querySelector('#reveal-button');
const textContainer = document.querySelector('#text-container');

revealButton.addEventListener('click', () => {
  revealButton.style.opacity = 0;
  setTimeout(() => {
    revealButton.style.display = 'none';
    textContainer.style.display = 'block';
  }, 1000);
});
