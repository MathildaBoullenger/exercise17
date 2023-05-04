function rollDice() {
    // get the selected dice type from the user
    let diceTypeSelect = document.getElementById("dice-type");
    let diceType = parseInt(diceTypeSelect.value);
  
    // generate a random number between 1 and 6
    let result = Math.floor(Math.random() * diceType) + 1;
  
    // display the result in the "result" div
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Result: You rolled " + result + " on a " + "D" + diceType +"!";
  }
  