const mainSlider = document.querySelector('.slider__container');
const commentsSlider = document.querySelector('.swiper-container');
const saleSlider = document.querySelector('.sale-chairs');

let mySwiper0 = new Swiper(mainSlider, {
  wrapperClass: 'slider__wrapper',
  slidesPerView: 1,
  slideClass: 'slider__card',
  direction: 'vertical',
  spaceBetween: 40,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
    },
  },
});

function mainSliderResize() {
  if (window.innerWidth <= 750) {
    mySwiper0.changeDirection('horizontal');

    mySwiper0.pagination.destroy();
    //mySwiper0.pagination.el.innerHTML = '';


    // for (let i = 0; i < mySwiper0.pagination.bullets.length; i++) {
    //   mySwiper0.pagination.bullets[i].remove();
    // }

    mySwiper0.params.pagination.type = 'progressbar';
    mySwiper0.params.pagination.renderBullet = undefined;
    mySwiper0.pagination.init();
  } else {
    mySwiper0.changeDirection('vertical');

    mySwiper0.pagination.destroy();

    // for (let i = 0; i < mySwiper0.pagination.bullets.length; i++) {
    //   mySwiper0.pagination.bullets[i].remove();
    // }
    //mySwiper0.pagination.el.innerHTML = '';
    mySwiper0.params.pagination.type = 'bullets';
    mySwiper0.params.pagination.renderBullet = function (index, className) {
      return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
    };
    mySwiper0.pagination.init();
  }

  mySwiper0.pagination.update();
  mySwiper0.update();
}

let mySwiper = new Swiper(commentsSlider, {
  // Optional parameters
  // direction: 'vertical',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})


// let mySwiper1 = new Swiper(saleSlider, {
//   // Optional parameters
//   // direction: 'vertical',

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// })

let mySwiper1;

function mobileSlider() {
  if (window.innerWidth <= 750 && saleSlider.dataset.mobile == 'false') {
    mySwiper1 = new Swiper(saleSlider, {
      // Optional parameters
      // direction: 'vertical',

      // If we need pagination
      spaceBetween: 20,
      slidesPerView: 1,
      // width: 400,
      centeredSlides: true,
      visibilityFullFit: true,

      pagination: {
        el: '.sale-chairs__pagination',
        type: 'progressbar',
      },

      slideClass: 'sale-card',

    })
    saleSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 750) {
    saleSlider.dataset.mobile = 'false';

    if (saleSlider.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }

  }
}


mobileSlider();
mainSliderResize();
window.addEventListener('resize', mobileSlider);
window.addEventListener('resize', mainSliderResize);
