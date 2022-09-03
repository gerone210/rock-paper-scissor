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

function playRound(playerSelection, computerSelection) {
    let result = '';
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        result = 'Both of you chose ' + playerSelection + ' Its a Draw!';
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        result = 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSOR') {
        result = 'You Won! Rock beats Scissor';
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSOR') {
        result = 'You Lose! Scissor beats Paper';
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        result = 'You Won! Paper beats Rock';
    } else if (playerSelection == 'SCISSOR' && computerSelection == 'ROCK') {
        result = 'You Lose! Rock beats Scissor';
    } else if (playerSelection == 'SCISSOR' && computerSelection == 'PAPER') {
        result = 'You Won! Scissor beats Paper';
    } else {
        result = 'Choose only between Rock, Paper and Scissor';
    }
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let player = prompt('Rock, Paper or Scissor?');
        let computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
}

game();
