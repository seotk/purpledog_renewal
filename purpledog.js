
var swiper1 = new Swiper(".wine_collection", {
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".wine_next",
    prevEl: ".wine_prev",
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    800: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // 화면의 넓이가 640px 이상일 때
    990: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    1360: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});
var swiper2 = new Swiper(".review_slide", {
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".review_next",
    prevEl: ".review_prev",
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    390: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    // 화면의 넓이가 640px 이상일 때
    800: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }
});
var swiper3 = new Swiper(".slide_banner", {
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".slide_banner_next",
    prevEl: ".slide_banner_prev",
  },
  loop: true
});

var swiper = new Swiper(".card_slide_list", {
  effect: "cards",
  grabCursor: true,
});