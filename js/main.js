const openBtn = document.querySelector(".nav-trigger");
const closeBtn = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");

nav.classList.add("hidden");

function handleClick(e) {
  nav.classList.toggle("hidden");
}

openBtn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", handleClick);
