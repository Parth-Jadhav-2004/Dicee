randomvariable1 = Math.floor(Math.random()*6)+1;
// console.log(randomvariable1);

var randomDiceImage = "dice" + randomvariable1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


randomvariable2 = Math.floor(Math.random()*6)+1;
// console.log(randomvariable1);

var randomDiceImage = "dice" + randomvariable2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

if(randomvariable1 > randomvariable2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if(randomvariable1<randomvariable2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}