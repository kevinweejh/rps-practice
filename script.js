const picks = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    let pick = Math.floor((Math.random() * 3));
    return pick;
}

const getPlayerInput = () => {
    let playerSelectionStr = prompt("Choose between rock, paper or scissors:").toLowerCase();
    if (!playerSelectionStr) {
        alert("Please choose between rock, paper or scissors");
        getPlayerInput();
    }
    let playerSelectionNum = picks.indexOf(playerSelectionStr);
    return playerSelectionNum;
}

const playGame = () => {
    let winner;
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner;

    while (playerScore + computerScore < 5) {
        roundWinner = playRound();
        // console.log(`Round winner is ${roundWinner}`);
        if (roundWinner) {
            (roundWinner == "computer") ? computerScore++ : playerScore++;
            console.log(`Computer:\t${computerScore} \n Player:\t${playerScore}`);
        }
    }
    winner = (playerScore > computerScore) ? 'Player' : 'Computer'; 
    console.log(`${winner} wins!`)
}

const playRound = () => {
    let playerSelection = getPlayerInput();
    let computerSelection = getComputerChoice();

    let roundWinner;

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
