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

function playRound(playerSelection , computerSelection) { 
    const roundLose = `You lose! ${computerSelection} beats ${playerSelection}`; //reusable player lose message
    const roundWin = `You win! ${playerSelection} beats ${computerSelection}`; //reusable player win message
    
    if (playerSelection === computerSelection) { //evaluates tie   //CHANGE TO SWITCH ???
        tieScore++;
        return(`It's a tie.`);
    } else if (playerSelection === gameOption[0]) { //evaluates playerselection = rock
            if (computerSelection === gameOption[1]) {
                computerScore++;
                return (roundLose); 
            }   else (computerSelection === gameOption[2]); {
                playerScore++;
                return (roundWin);
            }
    } else if (playerSelection === gameOption[1]) { //evaluates playerselection = paper
            if (computerSelection === gameOption[0]) {
                playerScore++;
                return (roundWin);
            } else (computerSelection === gameOption[2]); {
                computerScore++;
                return (roundLose);
            }      
    } else if (playerSelection === gameOption[2]) { //evaluates playerselection = scissors
            if (computerSelection === gameOption[0]) {
                computerScore++;
                return (roundLose); 
            } else (computerSelection === gameOption[1]); {
                playerScore++;
                return (roundWin);
            }
    }
}

function gameResult(playerScore , computerScore) { //evaluates winner
    if (playerScore > computerScore) {
        return(`Game over. 
        Player wins the game!`)
     } else if (playerScore < computerScore) {
        return(`Game over. 
        Computer wins the game`);
     } else {
        return (`Game over
        Tie game`);
     }
}

//Round outcome counters
let playerScore = 0;
let computerScore = 0;
let tieScore = 0; 

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay(); //call computer selection
        let playerSelection = playerChoice(); //call player selection 
        console.log(playRound(playerSelection , computerSelection)); //call round evalutation
        console.log(`Player has ${playerScore} points`);
        console.log(`Computer has ${computerScore} points`);
        console.log(`Rounds tied: ${tieScore}`);
        if (i === 4){ //declares game winner
            console.log(gameResult(playerScore , computerScore));
        }
        }
    }

game();

/* Reviewer: @cavy

Project creator: @A-Tron

Project title: Rock Paper Scissors (w/o GUI)

## Code ##

Praises:

* Core functionality of the game works as intended
* Good variable and function names
* Code is properly indented and easy to read

Critiques:
* Changing the return type of your playRound function to a boolean that indicates whether the player won or lost could simplify it.  
* Using a switch statement instead of a series of if statements could clean up your playRound function


* Instead of defining global variables like playerScore and gameOption I would instead define them inside of your functions (SKIP gameOption is used in multiple functions)
* Should use the strict comparison operator (===) instead of the abtract comparison operator (==) unless there is a reason to use abstract comparison (which I didn't see in your code) (OKAY)
* Doesn't handle case where user enters an input that is not 'rock', 'paper', or 'scissors', instead user loses the round if they enter an invalid move
* I would use a constant in your game function called rounds and set it to 5 instead of hardcoding it into your for loop to make it clear where to change the number of rounds in game should it need to be updated (Skip-assignment recommended a loop)
* I think you may have forgotten to remove console.log("hello world") from the top of script (REMOVED)
* At the end of your script where you call your game function I think you can just call game() instead of using console.log(game()) because you're already logging to the console inside your game function (CHANGED)
* Some of your comments like 'call computer selection' are unnecessary because you already used good function and variable names to indicate what is happening in your code


## Overall ##

Nice job! You really got the core functionality of the game down and your code was very easy to read because you paid attention to writing good names and line spacing. The only issues with your code that I could find were pretty minor.*/