
import { generateNewNumber, checkGuess, resetScore, getScore } from "./game";
import { updateScoreDisplay, fetchAndDisplayHighscores, sendHighscore } from "./gui";


fetchAndDisplayHighscores();//Visa highscore listan vid inläsning av sidan


updateScoreDisplay(getScore());//Ställa in startvärden


//Funktion för att kontrollera gissning
function handleGuess(guess) {
    if (checkGuess(guess)) {   //om det är rått
      
        updateScoreDisplay(getScore());
        generateNewNumber(); //generera nytt nummer


    } else {


        //om det är fel
        const playerName = document.getElementById('playerName').value;
        if (playerName) {
            sendHighscore(playerName, getScore());
        }

        resetScore(); //Restart score
        updateScoreDisplay(getScore());
        generateNewNumber(); //generera nytt nummer
    }
}

//Ställa in händelselyssnare för knappar
document.getElementById('guess1').addEventListener('click', () => handleGuess(1));
document.getElementById('guess2').addEventListener('click', () => handleGuess(2));
document.getElementById('guess3').addEventListener('click', () => handleGuess(3));
