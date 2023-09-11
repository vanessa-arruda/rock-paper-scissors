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
//runs one single round/match
function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection) {
        console.log("Ops! It's a tie!");
        return "tie";
    } 
    if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Oh-no! Rock beats Scissors!");
        return "playerlose";
    }

    if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("Oh-no! Paper beats Rock!");
        return "playerlose";
    }
    if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Oh-no! Scissors beat Paper!");
        return "playerlose";
    }
    if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("Yeah! Paper beats Rock!");
        return "playerwin";
    }
    if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Yeah! Scissors beats Paper!");
        return "playerwin";
    }
    if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Yeah! Rock beats Scissors!");
        return "playerwin";
    }
}

//runs multiple game matches
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    
    for (let i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();
    
        if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            console.log("invalid choice");
            i--;
        } else {
            roundResult = playRound(playerSelection, computerSelection);

            if(roundResult === "playerwin") {
                ++playerScore;
            } else if (roundResult === "playerlose") {
                ++computerScore;
            } else {
                ++playerScore;
                ++computerScore;
            }
            console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
        }
    }

    if(playerScore > computerScore) {
        console.log("You are the winner!");
    } else if(computerScore === playerScore) {
        console.log("It's a final tie!");
    } else {
        console.log("Uh-Oh! You lost the match!");
    }
}

game();