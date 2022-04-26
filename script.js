document.querySelector("#check").addEventListener("click", checkWin)


function rockPaperScissor() {
    // Math.random() returns a number between 0 - 1
    let random = Math.random()
    if(random <= .33) {
        return "rock"
    } else if (random <= .66) {
        return "paper"
    } else {
        return "scissor"
    }
}
rockPaperScissor()


function checkWin() {

    let botChoice = rockPaperScissor()
    let playerChoice = document.querySelector("input").value.toLowerCase()
    if((playerChoice === "rock" && botChoice === "scissors") || (playerChoice === "paper" && botChoice === "rock") ||  (playerChoice === "scissors" && botChoice === "paper")) {
        document.querySelector("#here").innerText = `Player entered ${playerChoice} and computer entered ${botChoice} so 
PLAYER WINS!!!`;
    } else if(playerChoice === botChoice) {
        document.querySelector("#here").innerText = `Player entered ${playerChoice} and computer entered ${botChoice} so 
You tied!`;
    } else{
        document.querySelector("#here").innerText = `Player entered ${playerChoice} and computer entered ${botChoice} so 
Sorry! You lose!`;
    }
    
}


