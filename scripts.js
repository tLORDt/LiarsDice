let rolls = 0;

function rollDice() {
    // Get a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Return the result
    return randomNumber;
}

function getDice(nDice) {

    // check if first roll
    if (rolls < 1){
        rolls++; 
         // Get dice values
        let numberStr = " " + rollDice()

        for(let i = 1; i < nDice; i++) {
            numberStr += " " + rollDice();
        }

        // Display Dice Rolls to User
        document.getElementById("dice").innerText = "Your Dice:" + numberStr
    } else {
        console.log("Roll failed: only can roll once a game.")
    }
}

function makeBet(){
    let numberDice = document.getElementById("numberDice").value;
    let valueDice = document.getElementById("valueDice").value;

    console.log("Bet that there are " + numberDice + " di with value " + valueDice);
}