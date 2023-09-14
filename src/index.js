import homePage from "./homepage";
import menuPage from "./menupage";

const button_home = document.querySelector('.home');
const button_menu = document.querySelector('.menu');

button_home.addEventListener('click', homePage);
button_menu.addEventListener('click', menuPage);
//button_menu.addEventListener('click', );

console.log("Trinkets Pale of Moon");