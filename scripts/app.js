const burger = document.querySelector(".btn1");
const menuDeroulant = document.querySelector(".list-nav");

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuDeroulant.classList.toggle('active');
})

const bienvenu = document.querySelector('.title-custom');

//const popupName = prompt("Quel est votre nom ? (La donnée ne sera pas enregistré)");


if(popupName){
    bienvenu.innerHTML = `Bienvenu(e) ${popupName}`;
}else{
    bienvenu.innerHTML = `Bienvenu jeune inconnu !aaa`
}