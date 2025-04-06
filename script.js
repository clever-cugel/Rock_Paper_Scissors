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

function getHumanChoice() {
    let choice = prompt('Enter your choice (rock, paper, or scissors): ');
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(`You win! Rock beats scissors! Player: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log(`You lose! Rock beats scissors! Player: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(`You win! Paper beats rock! Player: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log(`You lose! Paper beats rock! Player: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log(`You lose! Scissors beat paper! Player: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === computerChoice) {
        console.log(`You guys tied! Player: ${humanScore} Computer: ${computerScore}`);
    } else {
        humanScore++;
        console.log(`You win! Scissors beat paper! Player: ${humanScore} Computer: ${computerScore}`);
    }
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());