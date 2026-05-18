const menuButton = document.querySelector('#menubutton');
const menuPanel = document.querySelector('#menu-panel');

if (menuButton && menuPanel) {
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    menuPanel.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const links = menuPanel.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuButton.classList.remove('active');
      menuPanel.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      menuButton.classList.remove('active');
      menuPanel.classList.remove('active');
    }
  });
}
