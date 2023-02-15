
var swiper1 = new Swiper(".wine_collection", {
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // centeredSlides: true,
  slidesPerView: "0.5",
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
    470: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // 화면의 넓이가 640px 이상일 때
    760: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1440: {
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
    470: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // 화면의 넓이가 640px 이상일 때
    690: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }
});
var swiper3 = new Swiper(".slide_banner", {
  centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
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

const $gnb_m_con = document.querySelector(".gnb_m_con");
const $open_search = document.querySelector(".open_search")
const $open_bar = document.querySelector(".open_bar")
const $close_bar = document.querySelector(".close_bar");
const $close_search = document.querySelector(".close_search");
const $search_modal_con =document.querySelector(".search_modal_con")

$open_bar.addEventListener('click', function() {
  console.log("a");
  $gnb_m_con.classList.add("on");
});
$open_search.addEventListener('click', function() {
  console.log("a");
  $search_modal_con.classList.add("on");
});
$close_bar.addEventListener('click', function() {
  $gnb_m_con.classList.remove("on");
});
$close_search.addEventListener('click', function() {
  $search_modal_con.classList.remove("on");
});

