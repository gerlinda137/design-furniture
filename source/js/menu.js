const nav = document.querySelector('.main-nav__list');
const openMenuBtn = document.querySelector('.main-nav__toggle-menu-button');
const closeMenuBtn = document.querySelector('.main-nav__close-menu-button');

let mobileMenuOpened = false;

window.addEventListener('resize', update);

openMenuBtn.onclick = function () {
  mobileMenuOpened = true;
  update();
};

closeMenuBtn.onclick = function () {
  mobileMenuOpened = false;
  update();
}

update();

function update() {
  let mobileMode = window.innerWidth <= 750;
  if (!mobileMode) {
    mobileMenuOpened = false;
  }

  if (mobileMode && !mobileMenuOpened) {
    nav.classList.add('main-nav__list--hidden');
  } else {
    nav.classList.remove('main-nav__list--hidden');
  }

  if (mobileMenuOpened) {
    closeMenuBtn.classList.remove('main-nav__close-menu-button--hidden');
  } else {
    closeMenuBtn.classList.add('main-nav__close-menu-button--hidden');
  }
}
