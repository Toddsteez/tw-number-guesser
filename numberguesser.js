// declairing variables
var minRangeString = document.getElementById("min-range");
var maxRangeString = document.getElementById("max-range");
var lastGuessMessage = document.getElementById("last-guess-message");
var gameResponse = document.getElementById("game-response");
var guessButton = document.getElementById("guess-button");
var clearButton = document.getElementById("clear-button");
var resetButton = document.getElementById("reset-button");
var userGuess = document.getElementById("user-guess");
var userGuessValue = document.getElementById("user-guess-value");

// undefined variables
var minRange;
var maxRange;
var targetValue;

// create random number via defining variables
maxRangeString.addEventListener('input', generateNewNumber );

function generateNewNumber(){
  minRange = parseInt(minRangeString.value);
  maxRange = parseInt(maxRangeString.value);
  targetValue = Math.floor(Math.random() * (maxRange-(minRange) +1)) + (minRange);
}

// show last guess via conditionals
// used shorthand below
// removes guess and clear buttons action
guessButton.onclick = getGuess;
function getGuess() {
  var userGuessNum = parseInt(userGuess.value);
  lastGuessMessage.textContent = "Your last guess was";
  userGuessValue.textContent = userGuess.value;

  if (userGuessNum < minRange || userGuessNum > maxRange) {
    gameResponse.textContent = "Your number is out of range";
  }
  else if (userGuessNum === targetValue){
    gameResponse.textContent = "BOOM!";
    minRange -= 10;
    maxRange += 10;
    minRangeString.value = minRange;
    maxRangeString.value = maxRange;
    generateNewNumber();
  }
  else if (userGuessNum < targetValue) {
    gameResponse.textContent = "That is too low";
  }
  else if (userGuessNum > targetValue) {
    gameResponse.textContent = "That is too high";
  }
  else {
    gameResponse.textContent = "That is not a number";
  }
  guessButton.classList.remove('enableClass');
  clearButton.classList.remove('enableClass');
}

// input (click) removes action
// removes classes so buttons don't work
// used shorthand below
clearButton.onclick = clearText;
function clearText() {
  userGuess.value = '';
  guessButton.classList.remove('enableClass');
  clearButton.classList.remove('enableClass');
}

// reset button returns empty values 
// removes classes so buttons don't work
// creates new random number
resetButton.onclick = resetGame;
function resetGame() {
  minRangeString.value = '';
  maxRangeString.value = '';
  userGuess.value = '';
  lastGuessMessage.textContent = '';
  userGuessValue.textContent = '';
  gameResponse.textContent = '';
  guessButton.classList.remove('enable-class');
  clearButton.classList.remove('enable-class');
  generateNewNumber();
}

// user guessing number activates buttons
userGuess.addEventListener('input', function() {
     guessButton.classList.add('enable-class');
     clearButton.classList.add('enable-class');
 });