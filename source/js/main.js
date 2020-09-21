const commentsSlider = document.querySelector('.swiper-container');
const saleSlider = document.querySelector('.sale-chairs__swiper-container');


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
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slideClass: 'sale-card',

    })
    saleSlider.dataset.mobile == 'true';
  }

  if (window.innerWidth > 750) {
    saleSlider.dataset.mobile = 'false';

    if (saleSlider.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }

  }
}

mobileSlider();
window.addEventListener('resize', () => {
  mobileSlider();
})
