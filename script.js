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

function playRound(playerSelection, computerSelection) {
    const playerVictory = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
    const computerVictory = `You lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`
    
    if (playerSelection === computerSelection) {
        return `It's a tie`
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
                return playerVictory;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
               (playerSelection === 'paper' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'rock')) {
                return computerVictory;
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const playerSelection = prompt('Rock, paper ot scissors?').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

