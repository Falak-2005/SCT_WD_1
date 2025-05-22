const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('nav ul.menu li a');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('primary-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active menu item based on scroll position
  let fromTop = window.scrollY + navbar.offsetHeight + 10;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menuToggle.classList.toggle('active');
  menu.classList.toggle('open');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menuToggle.setAttribute('aria-expanded', false);
      menuToggle.classList.remove('active');
      menu.classList.remove('open');
    }
  });
});
