
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let images1 = "images/dice" + randomNumber1 + ".png";
let images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".btn").addEventListener("click", diceGame);

function diceGame() {

document.querySelectorAll("img")[0].setAttribute("src", images1);
document.querySelectorAll("img")[1].setAttribute("src", images2);

if(randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Draw 🚩";
}

else if(randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins! ";
}

else {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}

document.querySelectorAll(".dice > p")[0].innerHTML = "1st Player Score = " + randomNumber1;
document.querySelectorAll(".dice > p")[1].innerHTML = "2nd Player Score = " + randomNumber2;

}