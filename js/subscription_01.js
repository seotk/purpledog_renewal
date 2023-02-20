const $level_section_list = document.querySelectorAll(
  ".level_section_list > section"
);
const $mw = document.querySelector(".mw");
const $level_modal_background = document.querySelector(
  ".level_modal_background"
);
const $level_modal_con = document.querySelector(".level_modal_con");
const $step_next = document.querySelector(".step_next");

const GREEN_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
  <span>&#149; 최소 구독 기간   3개월 이전 중단 시 비회원가   45,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 6,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
  <span>선택한 구독상품</span>
  <span class="level">
  THE GREEN DOUBLE / 39,000원
  </span>
  <a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const YELLOW_S_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
  <span>&#149; 최소 구독 기간 3개월 이전 중단 시 비회원가 45,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 6,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
  <span>선택한 구독상품</span>
  <span class="level">
  THE YELLOW SINGLE / 39,000원
  </span>
  <a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const YELLOW_D_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 최소 구독 기간 3개월 이전 중단 시 비회원가 84,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 11,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE YELLOW DOUBLE / 73,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const YELLOW_T_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 최소 구독 기간 3개월 이전 중단 시 비회원가 120,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 15,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE GREEN TRIPLE / 105,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const BLUE_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 최소 구독 기간 3개월 이전 중단 시 비회원가 74,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 6,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE BLUE / 68,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const CRIMSON_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 최소 구독 기간 3개월 이전 중단 시 비회원가 105,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 6,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE CRIMSON/ 99,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const VIOLET_20_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 최소 구독 기간 3개월 이전 중단 시 비회원가 215,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 15,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE VIOLET 20 / 200,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const VIOLET_30_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 최소 구독 기간 3개월 이전 중단 시 비회원가 315,000원이 적용됩니다. </span><span>&#149; 할인받은 금액은 월 15,000원씩 중간 시점에 추가 결제됩니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE VIOLET 30 / 300,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const BLACK_50_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 상담 후 와인 구성이 결정되는 프리미엄 라인입니다. </span><span>&#149; 전문 상담원이 별도로 연락드려 상담 도와드릴 예정입니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE BLACK 50 / 500,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
const BLACK_100_TEXT = `    <div class="level_modal">
<p><input type="checkbox" class="checkbox"> <label for="check"><span class="check">아래 내용을 확인했습니다.</span></label></p>
<div class="modal_deteil">
<span>&#149; 상담 후 와인 구성이 결정되는 프리미엄 라인입니다. </span><span>&#149; 전문 상담원이 별도로 연락드려 상담 도와드릴 예정입니다. </span>
</div>
<div class="choose_level">
<span>선택한 구독상품</span>
<span class="level">
THE BLACK 100 / 1,000,000원
</span>
<a href="./subscription_02.html"><span class="step_next">다음</span></a>
</div>
</div>`;
$level_section_list[0].addEventListener("click", function () {
  console.log("GREEN");
  $level_modal_con.innerHTML = GREEN_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[1].addEventListener("click", function () {
  console.log("YELLOW_S");
  $level_modal_con.innerHTML = YELLOW_S_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[2].addEventListener("click", function () {
  console.log("YELLOW_D");
  $level_modal_con.innerHTML = YELLOW_D_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[3].addEventListener("click", function () {
  console.log("YELLOW_T");
  $level_modal_con.innerHTML = YELLOW_T_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[4].addEventListener("click", function () {
  console.log("BLUE");
  $level_modal_con.innerHTML = BLUE_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[5].addEventListener("click", function () {
  console.log("CRIMSON");
  $level_modal_con.innerHTML = CRIMSON_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[6].addEventListener("click", function () {
  console.log("VIOLET_20");
  $level_modal_con.innerHTML = VIOLET_20_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[7].addEventListener("click", function () {
  console.log("VIOLET_30");
  $level_modal_con.innerHTML = VIOLET_30_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[8].addEventListener("click", function () {
  console.log("BLACK_50");
  $level_modal_con.innerHTML = BLACK_50_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_section_list[9].addEventListener("click", function () {
  console.log("BLACK_100");
  $level_modal_con.innerHTML = BLACK_100_TEXT;
  $level_modal_con.classList.toggle("on");
});
$level_modal_background.addEventListener("click", function () {
  console.log("back");
  $level_section_list.classList.remove("on");
  this.classList.toggle("on");
});



// ====================== 연습 ====================================================
// function Level (name, month, price, discount, level) {
//   this.name = name;
//   this.month = month;
//   this.price = price;
//   this.discount = discount;
//   this.level = level;
//   };

// function TXT () {
//   LEVEL_TEXT.innerText = this;
// }

// const GREEN = new Level("GREEN", 3, "45,000", "6,000", `THE GREEN DOUBLE / 39,000원`
// );

// const YELLOW_S = new Level("YELLOW_S", 3, "45,000", "6,000", `THE YELLOW SINGLE / 39,000원`
// );
// const YELLOW_D = new Level("YELLOW_D", 3, "84,000", "11,000", `THE YELLOW DOUBLE / 73,000원`
// );
// const YELLOW_T = new Level("YELLOW_T", 3, "120,000", "15,000", `THE GREEN TRIPLE / 105,000원`
// );
// const BLUE = new Level("BLUE", 3, "74,000", "6,000", `THE BLUE / 68,000원`
// );
// const CRIMSON = new Level("CRIMSON", 3, "105,000", "6,000", `THE CRIMSON/ 99,000원`
// );
// const VIOLET_20 = new Level("VIOLET_20", 3, "215,000", "15,000", `THE VIOLET 20 / 200,000원`
// );
// const VIOLET_30 = new Level("VIOLET_30", 3, "315,000", "15,000", `THE VIOLET 30 / 300,000원`
// );
// const BLACK_50 = new Level("BLACK_50","" , "", "", `THE BLACK 50 / 500,000원`
// );
// const BLACK_100 = new Level("BLACK_100", "", "", "", `THE BLACK 100 / 1,000,000원`
// );

// $level_modal_con.innerHTML = LEVEL_TEXT;
