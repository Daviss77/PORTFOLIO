    document.querySelectorAll('header .cab a[href^="#"]').forEach(link => {link.addEventListener('click', function (e){
        e.preventDefault();
const targeId = this.getAttribute("href").substring(1);
const targetElement  = document.getElementById(targeId);
    if (targetElement){
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
        }
    });
});
