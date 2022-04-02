console.log("hello world");

const gameOption = ['rock' , 'paper' , 'scissors']; //game play options

// this block of code generates a random selection for the computer player
function computerPlay() {
    let computerChoice = gameOption[Math.floor(Math.random() * gameOption.length)]; //radomize computer selection, using length of gameOption array
    return computerChoice;
}

function playerChoice() { //prompt player selection and convert to lowCase to evaluate
    let playerValue = prompt('Rock, paper, or scissors?');
    return playerValue.toLowerCase();
}
/*player and computer selection variables
let computerSelection = computerPlay();
let playerSelection = playerChoice();*/

function playRound(playerSelection , computerSelection) {
    const roundLose = `You lose! ${computerSelection} beats ${playerSelection}`; //reusable player lose message
    const roundWin = `You win! ${playerSelection} beats ${computerSelection}`; //reusable player win message
    if (playerSelection === computerSelection) { //evaluates tie
        tieScore++;
        return(`It's a tie.`);
    } else if (playerSelection == gameOption[0]) { //evaluates playerselection = rock
            if (computerSelection == gameOption[1]) {
                computerScore++;
                return (roundLose); 
            }   else (computerSelection == gameOption[2]); {
                playerScore++;
                return (roundWin);
            }
    } else if (playerSelection = gameOption[1]) { //evaluates playerselection = paper
            if (computerSelection == gameOption[0]) {
                playerScore++;
                return (roundWin);
            } else (computerSelection == gameOption[2]); {
                computerScore++;
                return (roundLose);
            }      
    } else if (playerSelection = gameOption[2]) { //evaluates playerselection = scissors
            if (computerSelection == gameOption[0]) {
                computerScore++;
                return (roundLose); 
            } else (computerSelection == gameOption[1]); {
                playerScore++;
                return (roundWin);
            }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerChoice();
        console.log(playRound(playerSelection , computerSelection));
        console.log(`Player has ${playerScore} points`);
        console.log(`Computer has ${computerScore} points`);
        console.log(`Rounds tied: ${tieScore}`);
        }
    }
//Round outcome counters
let playerScore = 0;
let computerScore = 0;
let tieScore = 0; 

console.log(game());