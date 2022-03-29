console.log("hello world");


/*const rock = 1;
const paper = 2;
const scissors = 3; */

/* this block of code generates a random selection for the computer player*/
function computerPlay() {
    let result = Math.floor(Math.random() * 3) + 1; 
        if (result === 1) {
            return "rock";
        } else if (result === 2) {
            return "paper";
        } else if (result === 3) {
            return "scissors";
        }
    }

function playRound(playerSelection , computerSelection) {
    let playerValue = playerSelection.toLowerCase();
    if ((playerValue == "rock" && computerSelection == "scissors" ) || (playerValue == "scissors" && computerSelection == "paper" ) || (playerValue == "paper" && computerSelection == "rock" )) {
        return("Human wins round.");
    }   else if  ((playerValue == "rock" && computerSelection == "paper" ) || (playerValue == "scissors" && computerSelection == "rock" ) || (playerValue == "paper" && computerSelection == "scissors" )) {
        return("You lose. Computer wins round.");
    } else if ((playerValue == "rock" && computerSelection == "rock" ) || (playerValue == "scissors" && computerSelection == "scissors" ) || (playerValue == "paper" && computerSelection == "paper" )) {
        return("It's a tie.");
    }
}

const playerSelection = " ";
const computerSelection = computerPlay();
console.log(playRound("Paper" , computerSelection));
