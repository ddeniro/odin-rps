function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1)
        return "ROCK";
    else if (choice === 2)
        return "PAPER";
    else
        return "SCISSORS";
}

function getWinner(playerSelection, computerSelection) {
    pChoice = playerSelection.trim().toUpperCase();
    cChoice = computerSelection.trim().toUpperCase();
    if (pChoice === 'ROCK' && cChoice === 'SCISSORS' ||
        pChoice === 'PAPER' && cChoice === 'ROCK' ||
        pChoice === 'SCISSORS' && cChoice === 'PAPER') {
            console.log(`You win! ${pChoice} beats ${cChoice}.`);
            return [1,`You win! ${pChoice} beats ${cChoice}.`];
        }
    else if (pChoice === cChoice) {
        console.log(`It's a tie! Both players picked ${pChoice}`);
        return [null, `It's a tie! Both players picked ${pChoice}`];
    }
    else {
        console.log(`You lose! ${cChoice} beats ${pChoice}.`);
        return [0, `You lose! ${cChoice} beats ${pChoice}.`];
    }
}


const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const reset = document.querySelector('#reset');

const resultContainer = document.querySelector('#result');

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

const updateScore = (result) => {
    if (result === 1) {
        playerScore++;
    }
    else if (result === 0) {
        computerScore++;
    }
    roundsPlayed++;
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;

    if (roundsPlayed === 5) {
        const gameResult = document.createElement('h3');
        if(playerScore === computerScore) {
            gameResult.textContent = `Game ends in a tie. Both acheving ${playerScore} rounds.`;
        }
        else if (playerScore > computerScore) {
            gameResult.textContent = `You win with a score of ${playerScore}-${computerScore}`;
        }
        else {
            gameResult.textContent = `You lose with a score of ${playerScore}-${computerScore}`;
        }
        resultContainer.appendChild(gameResult);
    }
}

const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    let result = getWinner(playerSelection, computerSelection);

    const roundResult = document.createElement('p');
    roundResult.textContent = result[1];
    resultContainer.appendChild(roundResult);
    updateScore(result[0]);

}
btnRock.addEventListener('click', (e) => {
    if(roundsPlayed < 5) {
        playRound('ROCK');
    }
})
btnPaper.addEventListener('click', (e) => {
    if(roundsPlayed < 5) {
        playRound('PAPER');
    }
})
btnScissors.addEventListener('click', (e) => {
    if(roundsPlayed < 5) {
        playRound('SCISSORS');
    }
})

reset.addEventListener('click', () => {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
})