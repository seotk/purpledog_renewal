const $levelBtn = document.querySelectorAll(".level_section_list > section");
const $level_modal_con = document.querySelector(".level_modal_con");

let GREEN_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let YELLOW_S_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let YELLOW_D_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let YELLOW_T_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let BLUE_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let CRIMSON_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let VIOLET_20_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let VIOLET_30_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let BLACK_50_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
let BLACK_100_TEXT = `    <div class="level_modal">
<p><input type="checkbox" id="checkbox" class="checkbox"> <label for="checkbox"><span class="check">아래 내용을 확인했습니다.</span></label></p>
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
const TEXT_LIST = [
  GREEN_TEXT,
  YELLOW_S_TEXT,
  YELLOW_D_TEXT,
  YELLOW_T_TEXT,
  BLUE_TEXT,
  CRIMSON_TEXT,
  VIOLET_20_TEXT,
  VIOLET_30_TEXT,
  BLACK_50_TEXT,
  BLACK_100_TEXT,
];

function show(num) {
  $levelBtn.forEach((a) => {
    a.classList.remove("on");
  });
  $levelBtn[num].classList.add("on");
  console.log($levelBtn[num]);
  $level_modal_con.classList.add("on");
}
$levelBtn.forEach((list, idx) => {
  list.addEventListener("click", function () {
    show(idx);
    if ($levelBtn[idx] == $levelBtn[idx]) {
      $level_modal_con.innerHTML = TEXT_LIST[idx];
    } else {
      $level_modal_con.innerHTML = GREEN_TEXT;
    }
  });
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
