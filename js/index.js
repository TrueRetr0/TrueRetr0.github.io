const revealButton = document.querySelector('#reveal-button');
const textContainer = document.querySelector('#text-container');

revealButton.addEventListener('click', () => {
  textContainer.style.display = 'block';
});