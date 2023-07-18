document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
      const x = event.pageX;
      const y = event.pageY;
  
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
  