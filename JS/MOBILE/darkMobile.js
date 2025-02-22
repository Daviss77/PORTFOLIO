let theme = document.getElementById("imagemTema");
let darkMenu = document.querySelector(".LinksMobile");
let buttonDark = document.querySelector(".roadMore");

theme.addEventListener("click", function(){
  darkMenu.classList.toggle("darkLink");
  buttonDark.classList.toggle("darkButton");
})

function teste(){
    alert("ds")
}