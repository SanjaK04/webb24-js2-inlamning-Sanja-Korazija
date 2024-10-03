

function updateScoreDisplay(score) {
    document.getElementById('score').textContent = score;//Update score
}


async function fetchAndDisplayHighscores() {
    const response = await fetch('http://localhost:3000/highscores');//Highscore list
    const highscores = await response.json();
    
    const highscoreList = document.getElementById('highscoreList');
    highscoreList.innerHTML = ''; //Rensa nuvarande lista

    highscores.forEach((highscore) => {
        const li = document.createElement('li');

        li.textContent = `${highscore.name}: ${highscore.score}`;
        highscoreList.appendChild(li);
    })
}


//Skicka nya score till backend
async function sendHighscore(name, score) {
    await fetch('http://localhost:3000/highscores', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, score }),
    })


    fetchAndDisplayHighscores(); //Updatera listan efter nya score
}

export {updateScoreDisplay, fetchAndDisplayHighscores, sendHighscore};