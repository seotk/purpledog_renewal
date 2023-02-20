const $subscription_how = document.querySelector(".subscription_how");
const $subscription_what = document.querySelector(".subscription_what");
const $subscription_prefer = document.querySelector(".subscription_prefer");

$subscription_how.addEventListener("click", function () {
  $subscription_how.classList.toggle("on");
});
$subscription_what.addEventListener("click", function () {
  this.classList.toggle("on");
});
$subscription_prefer.addEventListener("click", function () {
  this.classList.toggle("on");
});
