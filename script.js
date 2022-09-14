function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
                playerScore ++
                roundWinner = 'player'         
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
               (playerSelection === 'paper' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'rock')) {
                computerScore ++
                roundWinner = 'computer'
               }
    updateScoreMessage (roundWinner, playerSelection, computerSelection)
}



function gameOver() {
    return playerScore === 5 || computerScore === 5
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

