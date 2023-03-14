const choices = document.querySelectorAll('.choice');
const scorePlayer = document.getElementById('score-player');
const scoreComputer = document.getElementById('score-computer');
const cover = document.getElementById('cover');
const winStatus = document.getElementById('win-status');
const answerSymbol = document.getElementById('answer-symbol');
const computerStatus = document.getElementById('computer-status');
const restart = document.getElementById('restart');

function mod(n, m) {
    return ((n % m) + m) % m;
  }
  
function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * 3)]; 
}

function playRound(playerSelection, computerSelection) {
    const toInt = {
        "rock": 1,
        "paper": 2,
        "scissors": 3
    };

    return mod(toInt[playerSelection.toLowerCase()] - toInt[computerSelection.toLowerCase()], 3);
}

let playerScore = 0;
let computerScore = 0;

choices.forEach((e) => {
    e.addEventListener('click', () => {
        let playerSelection = e.id;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === 1) {
            playerScore++;
            winStatus.textContent = 'You Win';
            winStatus.style.color = 'green';
        } else if (result === 2) {
            computerScore++;
            winStatus.textContent = 'You Loose';
            winStatus.style.color = 'red'
        } else {
            winStatus.textContent = "It's a Tie";
            winStatus.style.color = 'grey';
        }
        
        scorePlayer.textContent = `Player: ${playerScore}`;
        scoreComputer.textContent = `Computer: ${computerScore}`;
        
        cover.style.display = 'block';

        let type = '';
        if (computerSelection === 'rock') {
            type = '-back-fist';
        }
        else if (computerSelection === 'scissors') {
            type = '-scissors';
        }
        answerSymbol.className = `fa-solid fa-hand${type}`;

        computerStatus.textContent = `${computerSelection}`;
    });
});


document.addEventListener('click', (e) => {
    if (e.target === cover) {
        cover.style.display = 'none';
        footnote.style.display = 'block';

    } else if (e.target === restart) {
        playerScore = 0;
        computerScore = 0;
        scorePlayer.textContent = 'Player: 0';
        scoreComputer.textContent = 'Computer: 0';
    }
});