var noOfWins = 0;

// dice roll
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// assign dice number to secret words
var generateSecretWord = function (randomDiceRoll) {
  var randomDiceRoll = diceRoll();
  console.log(randomDiceRoll);
  if (randomDiceRoll == 1) {
    return 'banana';
  }
  if (randomDiceRoll == 2) {
    return 'chisel';
  }
  return 'faucet';
};

var main = function (input) {
  var secretWord = generateSecretWord();
  console.log(secretWord);
  var noOfWinsLeft = 2 - noOfWins;
  var myOutputValue =
    'The guessed word is ' +
    input +
    ' and the secret word is ' +
    secretWord +
    '. You need ' +
    noOfWinsLeft +
    ' to win.';
  if (input == secretWord) {
    noOfWins = noOfWins + 1;
    noOfWinsLeft = 2 - noOfWins;
    var myOutputValue =
      'The guessed word is ' +
      input +
      ' and the secret word is ' +
      secretWord +
      '. You need ' +
      noOfWinsLeft +
      ' to win.';
  }
  return myOutputValue;
};
