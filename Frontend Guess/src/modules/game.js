
let score = 0;// Spelarens poäng börjar på 0
let randomNum = Math.floor(Math.random() * 3) + 1;// Genererar ett slumpmässigt tal mellan 1 och 3 (inklusive), som spelaren ska försöka gissa

function generateNewNumber() {
    randomNum = Math.floor(Math.random() * 3) + 1;//Funktion som genererar ett nytt slumpmässigt tal mellan 1 och 3 varje gång den anropas
}

function checkGuess(guess) {
    if (guess === randomNum) {
        score++;
        return true; //Rätt guess
    } else {
        return false; //Fel guess
    }
}

function resetScore() {
    score = 0;
}

function getScore() {
    return score;
}


export {generateNewNumber, checkGuess, resetScore, getScore};













