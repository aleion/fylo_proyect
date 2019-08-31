const burgerBtn = () =>{
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navBar = document.querySelector('.navbar');


    burger.addEventListener('click', ()=>{
        navList.classList.toggle('nav-list-shown');
    });
}

burgerBtn();