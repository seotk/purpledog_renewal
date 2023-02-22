const $gnb_m_con = document.querySelector(".gnb_m_con");
const $open_search = document.querySelector(".open_search");
const $open_bar = document.querySelector(".open_bar");
const $close_bar = document.querySelector(".close_bar");
const $close_search = document.querySelector(".close_search");
const $search_modal_con = document.querySelector(".search_modal_con");
const $gnb = document.querySelector(".gnb");
const $gnb_m = document.querySelector(".gnb_m");

let $slide_banner = new Swiper(".slide_banner", {
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
  loop: true,
});
let $wine_collection = new Swiper(".wine_collection", {
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
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
let $review_slide = new Swiper(".review_slide", {
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
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    // 화면의 넓이가 640px 이상일 때
    470: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
let $review_card_slide = new Swiper(".card_slide_list", {
  effect: "cards",
  grabCursor: true,
});

const GNB = `<ul class="gnb_list">
<li><a href=" #">정기구독</a>
  <ul class="sub_list">
    <li><a href="./about_subscription.html">구독소개</a></li>
    <li><a href="#">구독방법</a></li>
    <li><a href="#">와인 피드백</a></li>
  </ul>
</li>
<li><a href="#">와인</a>
  <ul class="sub_list">
    <li><a href="#">와인별</a></li>
    <li><a href="#">국가별</a></li>
    <li><a href="#">추천상품</a></li>
  </ul>
</li>
<li><a href="#">커뮤니티</a>
  <ul class="sub_list">
    <li><a href="#">리뷰</a></li>
    <li><a href="#">매거진</a></li>
    <li><a href="#">공지 및 이벤트</a></li>
  </ul>
</li>
<li><a href="#">회사소개</a>
  <ul class="sub_list">
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">스토어</a></li>
  </ul>
</li>
<li><a href="#">문의</a>
  <ul class="sub_list">
    <li><a href="#">고객센터</a></li>
    <li><a href="#">B2B 문의</a></li>
    <li><a href="#">가맹 문의</a></li>
  </ul>
</li>
</ul>`;

$gnb.innerHTML = GNB;
$gnb_m.innerHTML = GNB;

$open_bar.addEventListener("click", function () {
  console.log("a");
  $gnb_m_con.classList.add("on");
});
$open_search.addEventListener("click", function () {
  console.log("a");
  $search_modal_con.classList.add("on");
});
$close_bar.addEventListener("click", function () {
  console.group("Aa");
  $gnb_m_con.classList.remove("on");
});
$close_search.addEventListener("click", function () {
  $search_modal_con.classList.remove("on");
});
