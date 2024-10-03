
let score = 0;
let randomNum = Math.floor(Math.random() * 3) + 1;

function generateNewNumber() {
    randomNum = Math.floor(Math.random() * 3) + 1;
}

function checkGuess(guess) {
    if (guess === randomNum) {
        score++;
        return true; //Tocno pogađanje
    } else {
        return false; //Netocno pogađanje
    }
}

function resetScore() {
    score = 0;
}

function getScore() {
    return score;
}


export {generateNewNumber, checkGuess, resetScore, getScore};













