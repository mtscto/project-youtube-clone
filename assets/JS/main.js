const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const esc = document.querySelector(".esc");


menu.addEventListener("click",() =>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
    esc.classList.toggle("escurecer");
});