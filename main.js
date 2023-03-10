const headerBar = document.querySelector(".header__bar");
const nav = document.querySelector(".nav");
const navX = document.querySelector(".nav__x");

headerBar.addEventListener("click",()=>{
    nav.classList.toggle("nav--display");
})

navX.addEventListener("click",()=>{
    nav.classList.toggle("nav--display");
})