const $menuBtn = document.querySelectorAll(".menu > li");
const $orderContents = document.querySelectorAll(".list");
console.log($menuBtn);

function show(num) {
  $menuBtn.forEach((a) => {
    a.classList.remove("on");
  });
  $menuBtn[num].classList.add("on");

  $orderContents.forEach((b) => {
    b.classList.remove("on");
  });

  $orderContents[num].classList.add("on");
}
$menuBtn.forEach((list, idx) => {
  list.addEventListener("click", () => {
    show(idx);
  });
});
