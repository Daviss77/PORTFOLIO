
function linguagem(){
    let elements = document.querySelectorAll('[data-ori][data-new]');
    let imgUK = document.getElementById('brIMG');
    
    let isEnglish = elements[0].textContent === elements[0].getAttribute('data-new');
    
    elements.forEach(element => {
        if(isEnglish){
           element.textContent = element.getAttribute('data-ori');
           imgUK.src = '../IMG/BR.png';

        }
        else{
            element.textContent = element.getAttribute('data-new');
            imgUK.src = '../IMG/EUA.png';
        }
    });
    
    
}