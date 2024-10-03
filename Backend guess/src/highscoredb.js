import fs from "fs/promises";//// Importiramo cijeli fs modul, fs je skraćenica za File System, što je modul koji je ugrađen u Node.js i omogućava interakciju s datotečnim sustavom. Ovaj modul pruža različite funkcije za rad s datotekama i direktorijima
import {writeFile} from "fs/promises";//Importiramo writeFile iz fs/promises,


const fileName = 'highscores.json';// Definiramo naziv datoteke u kojoj je highscore lista


// Dohvaćanje podataka iz json, highscore liste
async function getHighscores() {
    const rawdata =  await fs.readFile(fileName);
    
    const highscores = JSON.parse(rawdata);// Rasclanjivanje stringa u JavaScript objekt (array)
 
// Sortiranje highscore liste po scoreu u opadajucem redoslijedu
    highscores.sort(compareScores); // Pozivamo pomocnu funkciju za usporedbu
    return highscores.slice(0, 5); // Vracanje sortirane highscore liste
}

// Spremanje novih podataka u json 
async function saveHighscores(highscores) {
    highscores.sort((a, b) => b.score - a.score);//Sortiranje liste u opadajucem redoslijedu
    
    const jsonData = JSON.stringify(highscores, null, 2);// Pretvaranje JavaScript objekta (arraya) u json string
    
    await writeFile(fileName, jsonData); // Pisanje json stringa natrag u datoteku
}

// Pomocna funkcija za usporedbu score-ova
function compareScores(a, b) {
    return b.score - a.score; // Vracamo razliku između b i a
}


export {getHighscores, saveHighscores};


//i
//kako dodati novi rezultat, provjeri ako je post tocan, mozda ne radi zbog frontend
//kako dodati novi rezultat u listu, sortirati, odrzati pet rezultata
//sada tu updatiranu listu natrag u datoteku(player.json)


