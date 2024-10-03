

function updateScoreDisplay(score) {
    document.getElementById('score').textContent = score;// Azuriranje prikaza rezultata
}


async function fetchAndDisplayHighscores() {
    const response = await fetch('http://localhost:3000/highscores');// Prikaz highscore liste
    const highscores = await response.json();
    
    const highscoreList = document.getElementById('highscoreList');
    highscoreList.innerHTML = ''; // Ocisti postojecu listu

    highscores.forEach((highscore) => {
        const li = document.createElement('li');

        li.textContent = `${highscore.name}: ${highscore.score}`;
        highscoreList.appendChild(li);
    })
}


// Slanje novog rezultata na backend
async function sendHighscore(name, score) {
    await fetch('http://localhost:3000/highscores', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, score }),
    })


    fetchAndDisplayHighscores(); // Azuriraj listu nakon slanja
}

export {updateScoreDisplay, fetchAndDisplayHighscores, sendHighscore};