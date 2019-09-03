const burgerBtn = () =>{
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navBar = document.querySelector('.navbar');
    const burgerL1 = document.querySelector('.line1'); 
    const burgerL2 = document.querySelector('.line2');
    const burgerL3 = document.querySelector('.line3');

    burger.addEventListener('click', ()=>{
        navList.classList.toggle('nav-list-shown');
        burgerL1.classList.toggle('line-1');
        burgerL2.classList.toggle('line-2');
        burgerL3.classList.toggle('line-3');
    });
}

burgerBtn();