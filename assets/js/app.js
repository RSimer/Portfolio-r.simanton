const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li')


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index)=>{
        if(link.style.animation) {
            link.style.animation = '';
        }else{
        link.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + .6}s`;
        }
    })
});
}

navSlide();