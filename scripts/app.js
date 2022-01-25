const burger = document.querySelector(".btn1");
const menuDeroulant = document.querySelector(".list-nav");

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuDeroulant.classList.toggle('active');
})


// Réduire le temps de défilement des images pour créer une fluidité 
// d'une arriere map (exemple: load runner)
const vitesseCarousel = document.querySelector('.carousel-inner');
const imgCarousel = document.querySelector('.carousel-item');
const active = document.querySelector('.active');
