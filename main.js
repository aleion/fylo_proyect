const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });

   
    
}
navSlider();