let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.navlist');
let rightNav = document.querySelector('.rightNav');

burger.addEventListener("click", ()=>{
    navbar.classList.toggle("h-nav-resp");
    navlist.classList.toggle("v-class-resp");
    rightNav.classList.toggle("v-class-resp");
})