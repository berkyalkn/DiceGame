
let randomNumber1 = Math.ceil(Math.random() * 7);
let randomNumber2 = Math.ceil(Math.random() * 7);

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice img").setAttribute("src", "images1");
document.querySelector(".dice img").setAttribute("src", "images2");

if(randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Draw 🚩";
}

else if(randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins! ";
}

else {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}