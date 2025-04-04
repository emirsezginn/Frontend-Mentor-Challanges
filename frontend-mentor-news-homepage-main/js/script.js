const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-button');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
