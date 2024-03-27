const menu = document.getElementById("menu2");
const navWrap = document.querySelector(".nav__labels-wrap");

menu.addEventListener("click", (e) => {
  navWrap.classList.toggle("zeroTop");
});
