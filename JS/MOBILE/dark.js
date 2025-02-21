let darkTheme = false;

function darkMode(){
    darkTheme = !darkTheme;

    let menuDark = document.querySelector(".LinksMobile");

    if(darkTheme){
        menuDark.classList.toggle('darkLink');
    }
    else{
        menuDark.classList.remove("darkLink");
    }
}