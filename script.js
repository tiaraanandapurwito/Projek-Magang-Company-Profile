const menuIconNavbar = document.getElementById("icon-navbar");
const menuList = document.getElementById("menu-list");

menuIconNavbar.addEventListener("click", () => {
  menuList.classList.toggle('active');
});