let readMore = document.querySelector(".roadMore");
let closeReadMore = document.querySelector(".close");
let modal = document.querySelector(".ModalMoreRead");
const body = document.body;
readMore.addEventListener("click", function(){
    modal.style.display = "block";
    body.classList.add("blur");
});

closeReadMore.addEventListener("click", function(){
    modal.style.display = "none";
    body.classList.remove("blur");
})