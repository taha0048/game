document.addEventListener('DOMContentLoaded', function() {

    const choices = ['rock', 'paper', 'scissors'];
    let playerScore = 0;
    let computerScore = 0;


    const playerScoreElement = document.getElementById('P1');
    const computerScoreElement = document.getElementById('C1');
    const resultElement = document.getElementById('res');
    

    document.getElementById('rock').onclick = function() { playGame('rock'); };
    document.getElementById('paper').onclick = function() { playGame('paper'); };
    document.getElementById('scissors').onclick = function() { playGame('scissors'); };
    

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(playerChoice, computerChoice);
        

        if (result === 'win') {
            playerScore++;
            resultElement.textContent =  `You win! ${playerChoice} beats ${computerChoice}`;
        } else if (result === 'lose') {
            computerScore++;
            resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            resultElement.textContent = `It's a draw! You both chose ${playerChoice}`;
        }
        
        playerScoreElement.textContent = `Player's score: ${playerScore}`;
        computerScoreElement.textContent = `Computer's score: ${computerScore}`;
    }


    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }
        if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
            (playerChoice === 'paper' && computerChoice === 'rock') || 
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
            return 'win';
        } else {
            return 'lose';
        }
    }
});
function rel() {
    location.reload();
}
