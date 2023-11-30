let winner;
let playerScore = 0;
let computerScore = 0;
let roundWinner;

const picks = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    let pick = Math.floor((Math.random() * 3));
    return pick;
}

const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener("click", () => playGame(button.id))
});

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
    console.log(`Computer:\t${computerScore} \n Player:\t${playerScore}`);
}

const endGame = () => {
    winner = (playerScore > computerScore) ? 'Player' : 'Computer'; 
    console.log(`${winner} wins!`);
    playerScore = 0;
    computerScore = 0;
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
        alert("It's a tie, please play again");
        return null;
    } else {
        switch (computerSelection - playerSelection) {
            case 1:
                roundWinner = 'computer';
                alert("Try harder, bro");
                break;
            case -2:
                roundWinner = 'computer';
                alert("lol, are you for real here?");
                break;
            default:
                alert("Lucky duck");
                roundWinner = 'player';
        }
        return roundWinner;
    }
}
