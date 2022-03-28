 /*console.log("hello world");*/


/*const rock = 1;
const paper = 2;
const scissors = 3; */


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

function playRound(playerSelection, computerSelection) {
    if (playerSelection = "rock" && computerSelection = "scissors" )
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound());