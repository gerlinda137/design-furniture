let nav = document.querySelector('.main-nav__list');
let openMenuBtn = document.querySelector('.main-nav__toggle-menu-button');
let menuOpened = false;

let hideNav = function () {
  if (window.innerWidth <= 750) {
    if (!menuOpened) {
      nav.classList.add('main-nav__list--hidden')
    }
  } else {
    nav.classList.remove('main-nav__list--hidden');
    menuOpened = false;
  }
}


openMenuBtn.onclick = function () {
  nav.classList.toggle('main-nav__list--hidden');
  if (nav.classList.contains('main-nav__list--hidden')) {
    menuOpened = false;
  } else {
    menuOpened = true;
  }
}

hideNav();
window.addEventListener('resize', hideNav);
