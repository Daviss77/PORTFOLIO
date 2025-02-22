let darkTheme = false;

function darkMode(){
    darkTheme = !darkTheme;

    const body = document.body;
    const header = document.querySelector('.cab');
    let email = document.querySelector('.email');

    let titlesCab = document.querySelectorAll('.t1');
    const t1 = document.querySelector('.boxOne');
    const boxOneP = document.querySelectorAll('.boxOne')[1];

    let tema = document.getElementById('imagemTema');

    const myHistory = document.getElementById('containerTwo');
    const imgHistory = document.querySelector('.boxTwo');

    let projetos = document.getElementById('containerThree');
    let imgProjetos = document.querySelectorAll('.boxThree')
    let buttonLink = document.querySelectorAll('.buttonLink')

    const curriculo = document.querySelector('.boxFour');
    const iconMode = document.getElementById("iconMode");
    const habilidades = document.getElementById("containerFive");

    /*MOBILE*/
 
    /*MOBILE*/
        if(darkTheme){
            body.classList.toggle('corpo')
            t1.classList.toggle('darkH1')
            t1.classList.toggle('darkH3')
            boxOneP.classList.toggle('darkP');

            tema.src = '../IMG/lua.png'

            myHistory.classList.toggle('darkColor')
            imgHistory.classList.toggle('darkImg')
            header.classList.toggle('darkCab')
            email.classList.toggle('darkEmail')

            titlesCab.forEach(element => {
                element.classList.toggle('darkT1');
            });

            projetos.classList.toggle('darkColor');

            imgProjetos.forEach(element => {
                element.classList.toggle('darkImgProjeto');
            })

            buttonLink.forEach(element => {
                element.classList.toggle('darkButton');
            })
            curriculo.classList.toggle('darkBorder');
            /*MOBILE*/
           
            /*MOBILE*/
    }
    else{
        body.classList.remove('corpo')
        t1.classList.remove('darkH1')
        t1.classList.remove('darkH3')
        boxOneP.classList.remove('darkP');

        tema.src = '../IMG/TemaClaro.png'

        myHistory.classList.remove('darkColor')
        myHistory.classList.remove('darkImg')
        header.classList.remove('darkCab');
        email.classList.remove('darkEmail')
        titlesCab.forEach(element => {
            element.classList.remove('darkT1');
        });

        projetos.classList.remove('darkColor');

        imgProjetos.forEach(element => {
            element.classList.remove('darkImgProjeto');
        })

        buttonLink.forEach(element => {
            element.classList.remove('darkButton');
        })

        curriculo.classList.remove('darkBorder');

       
    }
}