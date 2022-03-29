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
    if ((playerSelection == "rock" && computerSelection == "scissors" ) || (playerSelection == "scissors" && computerSelection == "paper" ) || (playerSelection == "paper" && computerSelection == "rock" )) {
        return("Human wins round");
    }   else if  ((playerSelection == "rock" && computerSelection == "paper" ) || (playerSelection == "scissors" && computerSelection == "rock" ) || (playerSelection == "paper" && computerSelection == "scissors" )) {
        return("Computer wins round");
    } else if ((playerSelection == "rock" && computerSelection == "rock" ) || (playerSelection == "scissors" && computerSelection == "scissors" ) || (playerSelection == "paper" && computerSelection == "paper" )) {
        return("It's a tie");
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection , computerSelection));