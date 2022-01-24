const burger = document.querySelector(".btn1");
const menuDeroulant = document.querySelector(".list-nav");

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuDeroulant.classList.toggle('active');
})
