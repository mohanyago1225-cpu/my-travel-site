document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const targetId = button.getAttribute('data-target');
      const info = document.getElementById(targetId);

      if (info) {
        // info 요소의 display 상태를 토글
        if (info.style.display === 'block') {
          info.style.display = 'none';
        } else {
          info.style.display = 'block';
        }
      }
    });
  });
});