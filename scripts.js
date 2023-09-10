//function for the computer random choice of Rock, Paper or Scissors.
function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 10) % 3;

    if(computerChoice === 0){
        return "rock";
    } else if(computerChoice === 1){
        return "paper"
    } else{
        return "scissors"
    }
}

let playerScore = 0;
let computerScore = 0;
//function for the game
function playRound(playerSelection, computerSelection) {
    
    //condition to calculate the choices
    if(playerSelection === computerSelection) {
        console.log("It's a tie!");
        ++playerScore;
        ++computerScore;
    } 
    if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! Rock beats Scissors!");
        ++playerScore;
    }
    if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock!");
        ++computerScore;
    }
    if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Paper beats Scissors!");
        ++computerScore;
    }
    if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! Paper beats Rock!");
        ++playerScore;
    }
    if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! Scissors beats Paper!");
        ++playerScore;
    }
    if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors!");
        ++computerScore;
    }
}

//function that creates 5 matches
function game() {

    let playerScoreResult = 0;
    for (let i = 0; i < 3; i++) {
        //call the function to get the computer choice and assign to variable
        const computerSelection = getComputerChoice();
        //prompt user for choice and convert to lowercase (to become case insensitive)
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        //added a condition in case none of the 3 options are typed by the user and return invalid.
        if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            console.log("invalid choice");
            i--;
        } else {
            console.log(playRound(playerSelection, computerSelection));
            console.log("Player: ", playerScore, "Computer: ", computerScore);
            playerScoreResult = playerScore;
        }
    }
    //after the last iteraction
    if(playerScoreResult > computerScore) {
        console.log("You are the winner!");
        return 0;
    } else if(computerScore === playerScoreResult) {
        console.log("It's a final tie!")
        return 0;
    } else {
        console.log("Uh-Oh! You lost the match!");
        return 0;
    }
}