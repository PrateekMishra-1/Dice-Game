//For First Dice
var randomNo_1 = Math.floor((Math.random()*6))+1;

var randomDiceimg1 = "images/dice" + randomNo_1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src" , randomDiceimg1);

//For Second Dice
var randomNo_2 = Math.floor((Math.random()*6))+1;

var randomDiceimg2 = "images/dice" + randomNo_2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src" , randomDiceimg2);

//if P1 wins

if(randomNo_1 > randomNo_2){

    document.querySelector("h1").innerHTML = "Player 1 wins";

}

else if(randomNo_2 > randomNo_1){

    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else{

    document.querySelector("h1").innerHTML = "Draw !!"

}