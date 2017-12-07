var lRange = "abcdefghijklmnopqrstuvwxyz";
// abcdefghijklmno
var alphaArr = lRange.split("");
var guessWins = 0;
var guessLosses = 0;
var guessesLeft = 5;
// var guessed = 0;
var guessArr = [];
//Random Letter Chosen
var randomLetter = alphaArr [Math.floor(Math.random()*alphaArr.length)];
//Starts the Game
setCounter();

//Reset the Game
// Game Starts on key Press
document.onkeyup = function(event) {
guessesLeft--;
if (guessesLeft >= 0) {
inputCapture();
guessedArr();
updateCounter();


}
else if (guessesLeft >= -1){
gameReset();


}
if(guessArr.indexOf(randomLetter) >= 0){
guessWins++;
updateWins();
gameReset();

}
else {
guessLosses++;
updateLosses();

}
//
};

// Set Game Counter
function setCounter(){
guessesLeft = 5;
var gLeftStart = document.getElementById("guessesLeft");
gLeftStart.textContent = "Guesses Remaining= " + guessesLeft;
};

// Takes input and pushes to array
function inputCapture(){

userGuess = event.key;
guessArr.push(userGuess);
console.log(guessArr);
}
// Displays Guessed Letters
function guessedArr(){
var displayArray = document.getElementById("guessed");
displayArray.textContent =  guessArr;
}
//Update Guessed List
function updateGuessedArr(){
guessArr = [];
var displayArray = document.getElementById("guessed");
displayArray.textContent =  guessArr;
}
//Update Game Counter
function updateCounter(){

var gLeftUpdate = document.getElementById("guessesLeft");
gLeftUpdate.textContent = "Guesses Left= " + guessesLeft;
};
//Update the Wins
function updateWins(){
var winsTotal= document.getElementById("guessWins");
winsTotal.textContent = "Wins: " + guessWins;
}
//Update Losses
function updateLosses(){
var loseTotal= document.getElementById("guessLosses");
loseTotal.textContent = "Losses: " + guessLosses;
}
//Updates Random Letter
function updateRandom(){
randomLetter = alphaArr [Math.floor(Math.random()*alphaArr.length)];
}
// Resets the Game
function gameReset() {
setCounter();
updateGuessedArr();
updateRandom();



console.log("Stop Reading My Logs!!!");
}
// function testReset(){
// };