const konamiCodeSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodeIndex = 0;
let stickmanVisible = false;
let stickmanX = 50;
let stickmanY = 50;

document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();

  if (key === konamiCodeSequence[konamiCodeIndex]) {
    konamiCodeIndex++;
    if (konamiCodeIndex === konamiCodeSequence.length) {
      revealStickman();
      konamiCodeIndex = 0;
    }
  } else {
    konamiCodeIndex = 0;
  }

  if (stickmanVisible) {
    handleStickmanMovement(key);
  }
});

function revealStickman() {
  const stickman = document.getElementById('stickman');
  stickmanVisible = true;
  stickman.style.display = 'block';
}

function handleStickmanMovement(key) {
  const stickman = document.getElementById('stickman');
  const stepSize = 10;

  switch (key) {
    case 'arrowup':
      stickmanY -= stepSize;
      break;
    case 'arrowdown':
      stickmanY += stepSize;
      break;
    case 'arrowleft':
      stickmanX -= stepSize;
      break;
    case 'arrowright':
      stickmanX += stepSize;
      break;
    default:
      break;
  }

  stickman.style.top = stickmanY + 'px';
  stickman.style.left = stickmanX + 'px';
}

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

  // Remove the firework element after the animation ends
  firework.addEventListener('animationend', function() {
    firework.remove();
  });
}
