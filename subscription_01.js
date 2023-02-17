// const $body = document.querySelector(body);
const $subscription_level_con = document.querySelector(".subscription_level_con");
const $level_modal_con = document.querySelector(".level_modal_con");
const $level = document.querySelector(".level");

const LEVEL = `
THE GREEN DOUBLE / 39,000원
`;
$level.innerHTML = LEVEL;
$subscription_level_con.addEventListener("click", function () {
  console.log("a");
  $level_modal_con.classList.add("on");
});
$body.addEventListener("click", function () {
  console.log("a");
  $level_modal_con.classList.remove("on");
});


// const GREEN = new Level("GREEN", 3, "45,000원", "6,000원", `THE GREEN DOUBLE / 39,000원`
// );

// const YELLOW_S = new Level("YELLOW_S", 3, "45,000원", "6,000원", `THE YELLOW SINGLE / 39,000원`
// );
// const YELLOW_D = new Level("YELLOW_D", 3, "84,000원", "11,000원", `THE YELLOW DOUBLE / 73,000원`
// );
// const YELLOW_T = new Level("YELLOW_T", 3, "120,000원", "15,000원", `THE GREEN TRIPLE / 105,000원`
// );
// const BLUE = new Level("BLUE", 3, "74,000원", "6,000원", `THE BLUE / 68,000원`
// );
// const CRIMSON = new Level("CRIMSON", 3, "105,000원", "6,000원", `THE CRIMSON/ 99,000원`
// );
// const VIOLET_20 = new Level("VIOLET_20", 3, "215,000원", "15,000원", `THE VIOLET 20 / 200,000원`
// );
// const VIOLET_30 = new Level("VIOLET_30", 3, "315,000원", "15,000원", `THE VIOLET 30 / 300,000원`
// );
// const BLACK_50 = new Level("BLACK_50","" , "", "", `THE BLACK 50 / 500,000원`
// );
// const BLACK_100 = new Level("BLACK_100", "", "", "", `THE BLACK 100 / 1,000,000원`
// );


// function Level (name, month, price, discount, level) {
  //   this.name = name;
  //   this.month = month;
  //   this.price = price;
  //   this.discount = discount;
  //   this.level = level;
//   this.display = () => {
  //     console.log(`${this.name} ${this.month}${this.price} ${this.discount} ${this.level}`);
  //   };
  //   // $level_modal_con.innerHTML = level_modal;
  // }
  // function addHtml (nam) {
    //   if ($level_modal_con.classList.add(this)) {
      //     thi
      //   }
      // }

      
// VIOLET_20.display();
// GREEN.display();