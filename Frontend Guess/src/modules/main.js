
import { generateNewNumber, checkGuess, resetScore, getScore } from "./game";
import { updateScoreDisplay, fetchAndDisplayHighscores, sendHighscore } from "./gui";


fetchAndDisplayHighscores();//Prikaz highscore liste prilikom ucitavanja stranice


updateScoreDisplay(getScore());//Postavljanje pocetnih vrijednosti


// Funkcija za provjeru pogotka
function handleGuess(guess) {
    if (checkGuess(guess)) {   //Ako je tocan pogodak
      
        updateScoreDisplay(getScore());
        generateNewNumber(); // Generiraj novi broj


    } else {


        //Ako je netocan pogodak
        const playerName = document.getElementById('playerName').value;
        if (playerName) {
            sendHighscore(playerName, getScore());
        }

        resetScore(); //Resetiraj bodove
        updateScoreDisplay(getScore());
        generateNewNumber(); //Generiraj novi broj
    }
}

// Postavljanje event listenera za gumbe
document.getElementById('guess1').addEventListener('click', () => handleGuess(1));
document.getElementById('guess2').addEventListener('click', () => handleGuess(2));
document.getElementById('guess3').addEventListener('click', () => handleGuess(3));
