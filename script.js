let winner;
let playerScore = 0;
let computerScore = 0;
let roundWinner;

const picks = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    let pick = Math.floor((Math.random() * 3));
    return pick;
}

const buttons = document.querySelectorAll("button:not(#restart");
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener("click", () => playGame(button.id))
});

const scoreDisplay = document.querySelector("#runningScore");
const announcementDisplay = document.querySelector("#announcement");

const restartButton = document.querySelector("#restart");
const restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    restartButton.toggleAttribute("hidden");
    printCurrentScore();
    announcementDisplay.innerText = null;
    buttons.forEach((button) => {
        button.toggleAttribute("disabled");
    })
}
restartButton.addEventListener("click", () => restartGame());

// const getPlayerInput = () => {
//     let playerSelectionStr = prompt("Choose between rock, paper or scissors:").toLowerCase();
//     if (!playerSelectionStr) {
//         alert("Please choose between rock, paper or scissors");
//         getPlayerInput();
//     }
//     let playerSelectionNum = picks.indexOf(playerSelectionStr);
//     return playerSelectionNum;
// }

const printCurrentScore = () => {
    scoreDisplay.innerText = `Computer:\t${computerScore} \n Player:\t${playerScore}`;
}

const endGame = () => {
    winner = (playerScore > computerScore) ? 'Player' : 'Computer'; 
    announcementDisplay.innerText = `${winner} wins!`;
    restartButton.toggleAttribute("hidden");
    buttons.forEach((button) => {
        button.toggleAttribute("disabled");
    })
    // playerScore = 0;
    // computerScore = 0;
}

const playGame = (id) => {
    while (playerScore + computerScore < 5) {
        roundWinner = playRound(id);
        (roundWinner) ? console.log(`Round winner is ${roundWinner}`) : null;
        if (roundWinner) {
            (roundWinner == "computer") ? computerScore++ : playerScore++;
            printCurrentScore();
            break;
        } else {
            printCurrentScore();
            break;
        }
    }
    (playerScore + computerScore == 5) ? endGame() : null;
}

const playRound = (playerSelectionStr) => {
    // let playerSelection = getPlayerInput();
    let computerSelection = getComputerChoice();
    let playerSelection = picks.indexOf(playerSelectionStr);

    if (playerSelection == computerSelection) {
        announcementDisplay.innerText = "It's a tie, please play again";
        return null;
    } else {
        switch (computerSelection - playerSelection) {
            case 1:
                roundWinner = 'computer';
                announcementDisplay.innerText = "Try harder, bro";
                break;
            case -2:
                roundWinner = 'computer';
                announcementDisplay.innerText = "lol, are you for real here?";
                break;
            default:
                announcementDisplay.innerText = "Lucky duck";
                roundWinner = 'player';
        }
        return roundWinner;
    }
}
