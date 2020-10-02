const mainSlider = document.querySelector('.slider__container');
const commentsSlider = document.querySelector('.swiper-container');
const saleSlider = document.querySelector('.sale-chairs');
const pageWidthMobileThreshold = 750;

let mainSwiper = null;
let isMainSwiperMobile = false;


function mainSliderResize() {
  let shouldBeMobile = window.innerWidth <= pageWidthMobileThreshold;
  if (shouldBeMobile && (mainSwiper === null || !isMainSwiperMobile)) {
    isMainSwiperMobile = true;

    if (mainSwiper != null) {
      mainSwiper.destroy();
    }

    mainSwiper = new Swiper(mainSlider, {
      wrapperClass: 'slider__wrapper',
      slidesPerView: 1,
      slideClass: 'slider__card',
      direction: 'horizontal',
      spaceBetween: 40,
      pagination: {
        el: '.slider__pagination',
        type: 'progressbar',
      },
    });
  }

  if (!shouldBeMobile && (mainSwiper === null || isMainSwiperMobile)) {
    isMainSwiperMobile = false;
    if (mainSwiper != null) {
      mainSwiper.destroy();
    }

    mainSwiper = new Swiper(mainSlider, {
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
  }
}

let commentsSwiper = new Swiper(commentsSlider, {
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})



let saleSwiper;

function checkCreateSaleMobileSwiper() {
  if (window.innerWidth <= pageWidthMobileThreshold && saleSlider.dataset.mobile == 'false') {
    saleSwiper = new Swiper(saleSlider, {
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

  if (window.innerWidth > pageWidthMobileThreshold) {
    saleSlider.dataset.mobile = 'false';

    if (saleSlider.classList.contains('swiper-container-initialized')) {
      saleSwiper.destroy();
    }

  }
}


checkCreateSaleMobileSwiper();
mainSliderResize();
window.addEventListener('resize', checkCreateSaleMobileSwiper);
window.addEventListener('resize', mainSliderResize);
