const $subscription_what = document.querySelectorAll(
  ".subscription_what_con > div"
);
const $subscription_how = document.querySelectorAll(
  ".subscription_how_con > div"
);
const $subscription_prefer1 = document.querySelectorAll(".Alcohol > div");
const $subscription_prefer2 = document.querySelectorAll(".acidity > div");
const $subscription_prefer3 = document.querySelectorAll(".Sugar > div");

$subscription_what.forEach((list, idx) => {
  list.addEventListener("click", () => {
    $subscription_what.forEach((a) => a.classList.remove("on"));
    $subscription_what[idx].classList.add("on");
    console.log("a");
  });
});
$subscription_how.forEach((list, idx) => {
  list.addEventListener("click", () => {
    $subscription_how.forEach((a) => a.classList.remove("on"));
    $subscription_how[idx].classList.add("on");
    console.log("a");
  });
});
$subscription_prefer1.forEach((list, idx) => {
  list.addEventListener("click", () => {
    $subscription_prefer1.forEach((a) => a.classList.remove("on"));
    $subscription_prefer1[idx].classList.add("on");
  });
});
$subscription_prefer2.forEach((list, idx) => {
  list.addEventListener("click", () => {
    $subscription_prefer2.forEach((a) => a.classList.remove("on"));
    $subscription_prefer2[idx].classList.add("on");
  });
});
$subscription_prefer3.forEach((list, idx) => {
  list.addEventListener("click", () => {
    $subscription_prefer3.forEach((a) => a.classList.remove("on"));
    $subscription_prefer3[idx].classList.add("on");
  });
});
