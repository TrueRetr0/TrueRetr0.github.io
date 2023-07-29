document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const colors = ['red', 'white', 'blue'];
    colors.forEach(color => createFirework(x, y, color));
  });
});

function createFirework(x, y, color) {
  const firework = document.createElement('div');
  firework.classList.add('firework', color);
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;

  document.body.appendChild(firework);

  firework.addEventListener('animationend', function() {
    firework.remove();
  });
}

// Function to toggle the visibility of the site settings menu
function toggleSettings() {
  const settingsMenu = document.getElementById('settings-menu');
  settingsMenu.classList.toggle('settings-hidden');
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Function to change font size
function changeFontSize() {
  const fontSizeInput = document.getElementById('font-size-input');
  const fontSize = fontSizeInput.value + 'px';
  document.body.style.fontSize = fontSize;
}