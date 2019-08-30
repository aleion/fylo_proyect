const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });

   
    
}
navSlider();

const heroSlider = () => {
    const heroImg = document.querySelector('.hero-img');
    const heroTxt = document.querySelector('.section-1-text');
    heroImg.classList.add('hero-img-load');
    heroTxt.classList.add('section-1-text-load')

}
document.addEventListener('load', heroSlider());