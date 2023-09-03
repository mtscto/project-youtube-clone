const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const esc = document.querySelector(".esc");


menu.addEventListener("click",() =>{
    navbar.classList.toggle("open-menu");
    esc.classList.toggle("escurecer");
});