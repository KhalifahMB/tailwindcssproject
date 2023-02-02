const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const toggleNav = () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
};

const naviation = () => {
  btn.addEventListener("click", toggleNav);
};

naviation();
