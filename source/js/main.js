const commentsSlider = document.querySelector('.swiper-container');
const saleSlider = document.querySelector('.sale-chairs');


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
window.addEventListener('resize', mobileSlider)
