const choices = ['rock', 'paper', 'scissors']
let winners = [];

function resetGame() {
  winners = [];
  document.querySelector('.playerScore').textContent = 'Score: 0';
  document.querySelector('.computerScore').textContent = 'Score: 0';
  document.querySelector('.ties').textContent = 'Ties: 0';
  document.querySelector('.winner').textContent = '';
  document.querySelector('.playerChoice').textContent = '';
  document.querySelector('.computerChoice').textContent = '';
  document.querySelector('.reset').style.display = 'none';
}

function startGame() {
  //play game until someone wins 5 times
  let imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    img.addEventListener('click', () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  })
}

function playRound(playerChoice) {
  let wins = checkWins();
    if (wins >= 5) {
      return;
    }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner)
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    //display end result
    //chg button to visible
    //display whos the winner
    displayEnd();
  }
}

function tallyWins() {
  const pWinCount = winners.filter(item => item == 'Player').length;
  const cWinCount = winners.filter(item => item == 'Computer').length;
  const ties = winners.filter(item => item == 'Tie').length;
  document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
  document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
  document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
  document.querySelector('.computerChoice').textContent = `Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == 'Player') {
    document.querySelector('.winner').textContent = 'You won the round!'
  } else if (winner == 'Computer') {
    document.querySelector('.winner').textContent = 'The computer won the round!'
  } else {
    document.querySelector('.winner').textContent = 'This round was a tie'
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == 'Player').length;
  if (playerWins == 5) {
    document.querySelector('.winner').textContent = 'You Won 5 Games, Congrats!';
  } else {
    document.querySelector('.winner').textContent = 'Sorry, the computer Won 5 times';
  }
  document.querySelector('.reset').style.display = 'flex';
}

function computerSelect() {
  const choice = choices[Math.floor(Math.random()*choices.length)];
    document.querySelector(`.${choice}`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.${choice}`).classList.remove('active');
    }, 700);
  return choice;
}

function checkWins() {
  const pWinCount = winners.filter(item => item == 'Player').length;
  const cWinCount = winners.filter(item => item == 'Computer').length;
  return Math.max(pWinCount, cWinCount)
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return 'Tie';
  } else if (
    (choiceP === 'rock' && choiceC === 'scissors') || 
    (choiceP === 'paper' && choiceC === 'rock') || 
    (choiceP === 'scissors' && choiceC === 'paper')) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

function setWins() {
  const pWinCount = winners.filter(item => item == 'Player').length;
  const cWinCount = winners.filter(item => item == 'Computer').length;
  const ties = winners.filter(item => item == 'Tie').length;
}

startGame();


