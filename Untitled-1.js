
const nav = document.querySelector('nav');

const navItems = nav.querySelectorAll('li');

navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hover');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('hover');
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});