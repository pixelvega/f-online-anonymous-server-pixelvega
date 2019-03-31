const openBtn = document.querySelector(".nav-trigger");
const closeBtn = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");

function handleClick(e) {
  nav.classList.toggle("slide-menu");
}

openBtn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", handleClick);
