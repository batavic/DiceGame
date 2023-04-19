

//generating random number for first die
var randomNumber1 = Math.floor(Math.random()*6+1);
var imgDice1 = "images/dice"+randomNumber1+".png";

//generating random number for second die
var randomNumber2 = Math.floor(Math.random()*6+1);
var imgDice2 = "images/dice"+randomNumber2+".png";

//selecting corresponding images for dice
document.querySelectorAll(".dice img")[0].setAttribute("src",imgDice1);
document.querySelectorAll(".dice img")[1].setAttribute("src",imgDice2);

//deciding the winner
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
