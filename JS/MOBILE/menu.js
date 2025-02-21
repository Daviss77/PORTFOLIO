const iconMenu = document.getElementById("menuMobile");
let menu = document.querySelector(".LinksMobile");
let onMenu = document.getElementById("menuMobile");
let closeMenu = document.querySelector(".closeLink");

onMenu.addEventListener("click", function(){
    menu.style.display = "block";
    iconMenu.style.display = "none";
})

closeMenu.addEventListener("click", function(){
    menu.style.display = "none";
    iconMenu.style.display = "block";
})