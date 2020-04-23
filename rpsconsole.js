// The game logic just in the console with no DOM manipulation.
function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1)
        return "ROCK";
    else if (choice === 2)
        return "PAPER";
    else
        return "SCISSORS";
}

function playRound(playerSelection, computerSelection) {
    pChoice = playerSelection.trim().toUpperCase();
    cChoice = computerSelection.trim().toUpperCase();
    if (pChoice === 'ROCK' && cChoice === 'SCIRSSORS' ||
        pChoice === 'PAPER' && cChoice === 'ROCK' ||
        pChoice === 'SCISSORS' && cChoice === 'PAPER') {
            console.log(`You win! ${pChoice} beats ${cChoice}.`);
            return 1;
        }
    else if (pChoice === cChoice) {
        console.log(`It's a tie! Both players picked ${pChoice}`);
        return null;
    }
    else {
        console.log(`You lose! ${cChoice} beats ${pChoice}.`);
        return 0;
    }
}




function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    let result;
    const totalRounds = 5;

    for (let round = 0; round < totalRounds; round++) {
        console.log(`Round: ${round + 1}`);
        playerSelection = prompt("Enter 'rock','paper', or 'scissors'.");
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            computerScore += 1;
        }
        else if (result === 1) {
            playerScore += 1;
        }
    }
    if (playerScore > computerScore)
        console.log(`You win with a score of ${playerScore}-${computerScore}`);
    else if (playerScore === computerScore)
        console.log(`You end the game in a tie. Both acheving ${playerScore} rounds.`);
    else
        console.log(`You lose with a score of ${playerScore}-${computerScore}`);

}

game();

