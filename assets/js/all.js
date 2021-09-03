"use strict";

(function () {
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  var breakpoint = window.matchMedia('(max-width: 992px)'); // keep track of swiper instances to destroy later

  var mySwiper;

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  var enableSwiper = function enableSwiper() {
    mySwiper = new Swiper('.js-classSwiper', {
      slidesPerView: 1.4,
      spaceBetween: 30
    });
  }; // keep an eye on viewport size changes


  breakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
})();
/* IIFE end */


var commentSwiper = document.querySelector('.js-commentSwiper');

if (commentSwiper) {
  var swiper = new Swiper('.js-commentSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
      fill: 'row'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row'
        },
        spaceBetween: 30
      }
    }
  });
}

var levelSwiper = document.querySelector('.js-levelSwiper');

if (levelSwiper) {
  var _swiper = new Swiper('.js-levelSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1
        }
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 1
        }
      }
    }
  });
}

var teacherSwiper = document.querySelector('.js-teacherSwiper');

if (teacherSwiper) {
  var _swiper2 = new Swiper('.js-teacherSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 4,
      fill: 'column'
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: 'row'
        }
      }
    }
  });
}

var recommendSwiper = document.querySelector('.js-recommendSwiper');

if (recommendSwiper) {
  var _swiper3 = new Swiper('.js-recommendSwiper', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
}

$('.js-level-card').on('click', function () {
  var className = $(this).attr('data-name');
  $('.js-level-card').removeClass('border border-white border-4');
  $(this).addClass('border border-white border-4');
  $('.js-level-card').find('.js-check').removeClass('text-white').addClass('opacity-25');
  $(this).find('.js-check').addClass('text-white').removeClass('opacity-25');
  $('.js-level-class').text(className);
});
var el = document.querySelector('.js-datepicker');

if (el) {
  var datepicker = new Datepicker(el, {
    nextArrow: '>',
    prevArrow: '<',
    buttonClass: 'btn primary'
  });
} // const el = document.querySelector('.js-datepicker');
// const datepicker = new Datepicker(el, {
//   buttonClass: 'btn primary',
//   nextArrow: '>',
//   prevArrow: '<'
// });


AOS.init({
  once: true
});
var toggleButtons = document.querySelectorAll('.js-slide');
var slide = document.querySelector('.slide');
$('.js-class-card').on('click', function () {
  $('.js-slide').toggleClass('open'); // $('.js-slide').slideUp().slideDown(); 出現$(...).slideup is not a function

  $('.js-class-card').removeClass('border border-primary border-4');
  $(this).addClass('border border-primary border-4');
});
//# sourceMappingURL=all.js.map
