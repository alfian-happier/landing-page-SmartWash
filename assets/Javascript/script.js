// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// JavaScript untuk toggle menu pada hamburger
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});



