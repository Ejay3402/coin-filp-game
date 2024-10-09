//variables

const heads = document.getElementById(`heads`);
const tails = document.getElementById(`tails`);

const playerPicked = document.getElementById(`playerPicked`);
const computerPicked = document.getElementById(`computerPicked`);
const scores = document.getElementById(`scores`);
const scoreOutput = document.getElementById(`score`);
const reset = document.getElementById(`reset`);
const lastScore = document.getElementById(`lastScore`);
const startOver = document.getElementById(`startOver`);

//score

let score = JSON.parse(localStorage.getItem('scoreVal')) ||  {
    wins : 0,
    loses : 0,
};

console.log(score);


const computerMove = () => {
    let randomNumber = Math.random();
    let gameText;
    if (randomNumber <= 0.5) {
        gameText = `heads`;
    } else {
        gameText = `tails`;
    }
    return gameText;
};

const playGame = (guess) => {
    let gameText = computerMove();
    
    if (guess === `heads`) {
        playerPicked.textContent = `You picked Heads`;
        computerPicked.textContent = `Computer picked ${gameText}`;
        if (gameText === `heads`) {
            score.wins++;
            scoreOutput.textContent = `You win`;
        } else if (gameText === `tails`) {
            score.loses++;
            scoreOutput.textContent = `You Lose`;
        }
    } else if (guess === `tails`) {
        playerPicked.textContent = `You picked tails`;
        computerPicked.textContent = `Computer picked ${gameText}`;
        if (gameText === `tails`) {
            score.wins++;
            scoreOutput.textContent = `You win`;
        } else if (gameText === `heads`) {
            score.loses++;
            scoreOutput.textContent = `You Lose`;
        }
    }

    scores.textContent = `Wins : ${score.wins} Loses : ${score.loses}`;
    localStorage.setItem('scoreVal', JSON.stringify(score));

};

heads.addEventListener("click", () => {
    playGame(`heads`);
});

tails.addEventListener("click", () => {
    playGame(`tails`);
});

reset.addEventListener("click", () => {
    scores.textContent = `Wins : 0   Loses 0`;
    score.wins = 0;
    score.loses = 0;
    playerPicked.textContent = ``;
    computerPicked.textContent = ``;
    scoreOutput.textContent = `Game was reset click Heads or Tails to start`;
});

lastScore.textContent = `This was the last score from the last game when it was reloaded Wins : ${score.wins}, Loses : ${score.loses}`;

startOver.addEventListener("click", () => {
    localStorage.removeItem('scoreVal');
    lastScore.textContent = ``;
});