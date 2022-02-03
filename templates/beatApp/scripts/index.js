var back = document.getElementById("particles-js");

document.addEventListener("keydown", function(event){
    
    back.style.backgroundColor = getRandomColor();
    var key = event.key;
    playMusic(key);

});

function playMusic(key){
    switch(key){
        case "d":
            var audio = new Audio("../sound/Kick1.wav");
            audio.play();
            break;
        case "e":
            var audio = new Audio("../sound/kick.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("../sound/kick2.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("../sound/Clap1.wav");
            audio.play();
            break;
        case "s":
            var audio = new Audio("../sound/door.wav");
            audio.play();
            break;
        case "q":
            var audio = new Audio("../sound/champ.wav");
            audio.play();
            break;
        case "w":
            var audio = new Audio("../sound/ecran.wav");
            audio.play();
            break;
        case "x":
            var audio = new Audio("../sound/pet.wav");
            audio.play();
            break;
        case "c":
            var audio = new Audio("../sound/whoosh.wav");
            audio.play();
            break;
        }
}




function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i =0; i<6;i++){
        color = color + letters[Math.floor(Math.random()*letters.length)];
    }
    return color;
}