const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  // This toggles a class named 'show' on your menu
  navLinks.classList.toggle('show');
});