document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');
    const contents = document.querySelectorAll('.content');
  
    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        contents.forEach(content => {
          content.classList.remove('active');
        });
  
        const targetId = panel.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });
  });
  