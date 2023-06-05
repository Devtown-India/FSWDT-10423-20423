const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const messageDisplay = document.querySelector('#message h3');

const options = ['rock', 'paper', 'scissors'];
let playerScore = 0, computerScore = 0;

const randomChoice = () => options[Math.floor(Math.random() * options.length)];

const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    messageDisplay.innerHTML = 'Draw!';
                    break;
                case 'paper':
                    messageDisplay.innerHTML = 'You lose! Paper beats rock.';
                    computerScoreDisplay.innerHTML = ++computerScore;
                    break;
                case 'scissors':
                    messageDisplay.innerHTML = 'You win! Rock beats scissors.';
                    playerScoreDisplay.innerHTML = ++playerScore;
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    messageDisplay.innerHTML = 'You win! Paper beats rock.';
                    playerScoreDisplay.innerHTML = ++playerScore;
                    break;
                case 'paper':
                    messageDisplay.innerHTML = 'Draw!';
                    break;
                case 'scissors':
                    messageDisplay.innerHTML = 'You lose! Scissors beats paper.';
                    computerScoreDisplay.innerHTML = ++computerScore;
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    messageDisplay.innerHTML = 'You lose! Rock beats scissors.';
                    computerScoreDisplay.innerHTML = ++computerScore;
                    break;
                case 'paper':
                    messageDisplay.innerHTML = 'You win! Scissors beats paper.';
                    playerScoreDisplay.innerHTML = ++playerScore;
                    break;
                case 'scissors':
                    messageDisplay.innerHTML = 'Draw!';
                    break;
            }
            break;
        default:
            messageDisplay.innerHTML = 'Invalid input!';
            break;
    }
};

rock.addEventListener('click', () => playRound('rock', randomChoice()))
paper.addEventListener('click', () => playRound('paper', randomChoice()))
scissors.addEventListener('click', () => playRound('scissors', randomChoice()))