function rollDiceHandler() {
  // get the selected dice type from the user
  const diceType = document.getElementById("dice-type").value;

  // generate a random number between 1 and 6
  const result = rollDice(parseInt(diceType));

  // display the result in the "result" div
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Result: You rolled " + result + " on a " + "D" + diceType + "!";
}

function rollDice(diceType) {
  if (!(diceType === 6 || diceType === 10)) return "The dice needs to have 6 or 10 faces";
  const rollValue = Math.floor(Math.random() * diceType) + 1;
  return rollValue;
}

// Testing 
function testRollDice() {
  console.log(rollDice(10));
  console.log(rollDice(6));
  console.log(rollDice(6));
  console.log(rollDice(30));
}

testRollDice();
