import fs from "fs/promises";// Vi importerar hela fs-modulen, fs är en förkortning för File System, vilket är en modul som är inbyggd i Node.js och möjliggör interaktion med filsystemet. Denna modul tillhandahåller olika funktioner för att arbeta med filer och kataloge
import {writeFile} from "fs/promises";//Importerar writeFile från fs/promises,


const fileName = 'highscores.json';//Vi definierar namnet på filen där highscore-listan finns.


//Hämtning av data från json, highscore-listan.
async function getHighscores() {
    const rawdata =  await fs.readFile(fileName);
    
    const highscores = JSON.parse(rawdata);// Rasclanjivanje stringa u JavaScript objekt (array)
 
//Sortering av highscore listan efter poäng i fallande ordning.
    highscores.sort(compareScores); //Vi anropar en hjälpfunktion för att jämföra
    return highscores.slice(0, 5); //Återlämning av den sorterade highscore-listan
}

//Spara och updatera json 
async function saveHighscores(highscores) {
    highscores.sort((a, b) => b.score - a.score);
    
    const jsonData = JSON.stringify(highscores, null, 2);
    
    await writeFile(fileName, jsonData); 

}    

//Hjälpfunktion för att jämföra poäng.
function compareScores(a, b) {
    return b.score - a.score; //Vi returnerar skillnaden mellan b och a.
}


export {getHighscores, saveHighscores};
