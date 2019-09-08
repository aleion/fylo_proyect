const burgerBtn = () =>{
    const burger = document.querySelector('.toggler');
    const navList = document.querySelector('.nav-list');
    const navBar = document.querySelector('.navbar');

    burger.addEventListener('click', ()=>{
        navList.classList.toggle('nav-list-shown');
    });
}

burgerBtn();