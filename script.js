let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        if (humanScore === 5 || computerScore === 5) {
            results.textContent = `Game over, final results >>> 
            Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `You win! Rock beats scissors! Player: ${humanScore} Computer: ${computerScore}`;
        }
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        if (humanScore === 5 || computerScore === 5) {
            results.textContent = `Game over, final results >>> 
            Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `You lose! Rock beats scissors! Player: ${humanScore} Computer: ${computerScore}`;
        }
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        if (humanScore === 5 || computerScore === 5) {
            results.textContent = `Game over, final results >>> 
            Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `You win! Paper beats rock! Player: ${humanScore} Computer: ${computerScore}`;
        }
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        if (humanScore === 5 || computerScore === 5) {
            results.textContent = `Game over, final results >>>
            Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `You lose! Paper beats rock! Player: ${humanScore} Computer: ${computerScore}`;
        }
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        if (humanScore === 5 || computerScore === 5) {
            results.textContent = `Game over, final results >>> 
            Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `You lose! Scissors beat paper! Player: ${humanScore} Computer: ${computerScore}`
        }
    } else if (humanChoice === computerChoice) {
        if (humanScore === 5 || computerScore === 5) {
            results.textContent = `Game over, final results >>> 
            Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `You guys tied! Player: ${humanScore} Computer: ${computerScore}`;
        }
    } else {
        humanScore++;
        if (humanScore === 5 || computerScore === 5) {
            results.textContent = `Game over, final results >>> 
            Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `You win! Scissors beat paper! Player: ${humanScore} Computer: ${computerScore}`;
        }
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');

rock.addEventListener('click', function() {
    humanChoice = 'rock';
    if (humanScore !== 5 && computerScore !== 5) {
        playRound(humanChoice, getComputerChoice());
    }
});

paper.addEventListener('click', function() {
    humanChoice = 'paper';
    if (humanScore !== 5 && computerScore !== 5) {
        playRound(humanChoice, getComputerChoice());
    }
});

scissors.addEventListener('click', function() {
    humanChoice = 'scissors';
    if (humanScore !== 5 && computerScore !== 5) {
        playRound(humanChoice, getComputerChoice());
    }
});