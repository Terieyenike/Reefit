// Toggle menu navigation
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!navToggle.classList.contains('nav--visible')) {
    nav.classList.toggle('nav--visible');
  }
}

let menuLinks = document.querySelectorAll('.nav__link');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleMenu);
});

// Light/Dark Mode
const toggleSwitch = document.querySelector('input[type=checkbox]');
const toggleIcon = document.getElementById('toggle-icon');
const header = document.querySelector('header');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const imageMode = (DARK_THEME) => {
  image1.src = `./img/eloho_${DARK_THEME}.jpg`;
  image2.src = `./img/undraw_personal_training_${DARK_THEME}.svg`;
  image3.src = `./img/undraw_mindfulness_${DARK_THEME}.svg`;
  image4.src = `./img/undraw_finish_line_katerina_${DARK_THEME}.svg`;
};

const toggleDarkLightMode = (DARK_THEME) => {
  header.style.backgroundColor = DARK_THEME
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = DARK_THEME ? 'Dark Mode' : 'Light Mode';
  DARK_THEME
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  DARK_THEME ? imageMode('dark') : imageMode('light');
};

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
};

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}

toggleSwitch.addEventListener('change', switchTheme);
