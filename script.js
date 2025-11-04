const menuIcon = document.getElementById('menu');
const bottomNav = document.getElementById('btmNav');

menuIcon.addEventListener('click',()=>{
    bottomNav.classList.toggle("active");
      // toggle icon between menu and close
  if (bottomNav.classList.contains("active")) {
    menuIcon.classList.replace("ri-menu-line", "ri-close-line");
  } else {
    menuIcon.classList.replace("ri-close-line", "ri-menu-line");
  }

})