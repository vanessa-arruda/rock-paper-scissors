//function to assign up to three number values, one for each option (rock/paper/scissors)
function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 10) % 3;

    if(computerChoice === 0){
        return "rock";
    } else if(computerChoice === 1){
        return "paper";
    } else{
        return "scissors";
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

let playerScore = 0;
let computerScore = 0;

//runs multiple game matches - now 5 matches
function game(playerSelection) {
    let roundResult;

    const computerSelection = getComputerChoice();

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
    
    //display playerScore
    const playerScoreElement = document.querySelector('#player-score');
    playerScoreElement.textContent = playerScore;

    const computerScoreElement = document.querySelector('#computer-score');
    computerScoreElement.textContent = computerScore;

    if(playerScore === 5 || computerScore === 5) {

        const textResult = document.querySelector('#text-result');
        const gameButtons = document.querySelectorAll('.buttons');

        if(playerScore > computerScore) {
            textResult.textContent = "WOW! You are LUCKY today! You are the winner!";   
            
        } else if(computerScore === playerScore) {
            textResult.textContent = "Well, not bad, but I wouldn't take high chances. It's a final tie!";

        } else {
            textResult.textContent = "Luck is not a friend today! Try again tomorrow and keep your pockets closed until then. You lost the match!";
        }

        for (const element of gameButtons) {
            element.setAttribute("disabled", true);
        }
        
    }
}

const btnRock = document.querySelector('#button-rock');
btnRock.addEventListener('click', () => {
    const playerSelection = 'rock';
    game(playerSelection);
})

const btnPaper = document.querySelector('#button-paper');
btnPaper.addEventListener('click', () => {
    const playerSelection = 'paper';
    game(playerSelection);
})

const btnScissors = document.querySelector('#button-scissors');
btnScissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    game(playerSelection);
});

const restart = document.querySelector('#restart');
restart.addEventListener('click', () => {
    //reset score
    playerScore = 0;
    computerScore = 0;

    //clear result message
    const textResult = document.querySelector('#text-result');
    textResult.textContent = "";

    //update player and computer scores
    const playerScoreElement = document.querySelector('#player-score');
    playerScoreElement.textContent = playerScore;

    const computerScoreElement = document.querySelector('#computer-score');
    computerScoreElement.textContent = computerScore;

    //reactivate buttons for new game
    const gameButtons = document.querySelectorAll('.buttons');

    for (const element of gameButtons) {
        element.removeAttribute("disabled");
    }

})