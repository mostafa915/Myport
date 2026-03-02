let barOfHead = document.querySelector("header .bar");
let home = document.querySelector(".home");
barOfHead.addEventListener("click", function (e) {
  barOfHead.classList.toggle("click");
});
home.addEventListener("click", (e) => {
  barOfHead.classList.remove("click");
});
let linksInHeaders = document.querySelectorAll("header .links li a");
let linkHomeInHeader = document.querySelector("header .links li a.h");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
linksInHeaders.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    linksInHeaders.forEach((e) => {
      e.classList.remove("active");
    });
    el.classList.add("active");
  });
  el.addEventListener("mouseleave", (e) => {
    el.classList.remove("active");
    linkHomeInHeader.classList.add("active");
  });
});
// document.body.addEventListener("mouseleave")
