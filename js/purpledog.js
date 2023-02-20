let $slide_banner = new Swiper(".slide_banner", {
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
  loop: true,
});
let $wine_collection = new Swiper(".wine_collection", {
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // centeredSlides: true,
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

const $gnb_m_con = document.querySelector(".gnb_m_con");
const $open_search = document.querySelector(".open_search");
const $open_bar = document.querySelector(".open_bar");
const $close_bar = document.querySelector(".close_bar");
const $close_search = document.querySelector(".close_search");
const $search_modal_con = document.querySelector(".search_modal_con");

const $gnb = document.querySelector(".gnb");
const $gnb_m = document.querySelector(".gnb_m");

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
const FOOTER = `<div class="max_footer mw">
<div class="top_menu" >
  <a href="./index.html"><img class="footer_logo" src="./imges/logo_small.png" alt="logo">
  <div class="foot_nav">
    <a href="#">공지사항</a>
    <a href="#">FAQ</a>
    <a href="#">개인정보처리방침</a>
    <a href="#">이용약관</a>
  </div>
</div>
<p>
(주)퍼플독 대표 : 박재정 법인등록번호 : 110111-6925824
<br>
사업자번호 : 215-87-92078 사업자번호(지점, 퍼플독 홍대) : 557-85-01671 통신판매업신고 : 2019-서울송파-2561
<br>
본사 : 서울특별시 강남구 테헤란로 521, 파르나스타워 29층 대표번호 : 02 6933-4772 ~ 3
<br>
운영시간(한국) 09:30 ~ 18:30 주말/공휴일 휴무
<br><br>

COPYRIGHT ⓒ Purpledog. ALL RIGHTS RESERVED.
</p>`;

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
