function rollDice() {
    // Get a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Return the result
    return randomNumber;
}

function getDice(nDice) {
    // Get dice values
    let numberStr = " " + rollDice()

    for(let i = 1; i < nDice; i++) {
      numberStr += " " + rollDice();
    }

    // Display Dice Rolls to User
    document.getElementById("dice").innerText = "Your Dice:" + numberStr
}

function makeBet(){
    let message = document.getElementById("message").value;

    console.log(message);
}