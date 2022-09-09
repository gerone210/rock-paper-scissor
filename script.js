function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice == 1) {
        choice = 'ROCK';
    } else if (choice == 2) {
        choice = 'PAPER';
    } else if (choice == 3) {
        choice = 'SCISSOR';
    }
    return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let result = '';

    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        result = 'Both of you chose ' + playerSelection + ' Its a Draw!';
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        result = 'You Lose! Paper beats Rock';
        computerScore++;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSOR') {
        result = 'You Won! Rock beats Scissor';
        playerScore++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSOR') {
        result = 'You Lose! Scissor beats Paper';
        computerScore++;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        result = 'You Won! Paper beats Rock';
        playerScore++;
    } else if (playerSelection == 'SCISSOR' && computerSelection == 'ROCK') {
        result = 'You Lose! Rock beats Scissor';
        computerScore++;
    } else if (playerSelection == 'SCISSOR' && computerSelection == 'PAPER') {
        result = 'You Won! Scissor beats Paper';
        playerScore++;
    } else {
        result = 'Choose only between Rock, Paper and Scissor';
    }
    return result;
}

function game() {
    if (playerScore < 5 || computerScore < 5) {
        let computer = getComputerChoice();
        let player = this.id;
        document.getElementById('results').innerHTML = playRound(
            player,
            computer
        );
        document.getElementById('playerScore').innerHTML =
            'Player Score: ' + playerScore;
        document.getElementById('computerScore').innerHTML =
            'Computer Score: ' + computerScore;
        console.log('Player: ' + player);
        console.log('Computer: ' + computer);
    } else {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('results').innerHTML =
            'The game has been reset';
    }
}

const btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click', game));
