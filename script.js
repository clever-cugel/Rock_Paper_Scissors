function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock!';
    } else if (choice === 1) {
        return 'Paper!';
    } else {
        return 'Scissors!';
    }
}

function getHumanChoice() {
    let choice = prompt('Enter your choice (r,p,s): ');
    return choice;
}

let humanScore = 0;
let computerScore = 0;