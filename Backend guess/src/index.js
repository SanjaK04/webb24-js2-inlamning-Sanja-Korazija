import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { getHighscores, saveHighscores } from './highscoredb.js';



const PORT = 3000;
const app = express();

app.use(cors()); 
app.use(express.json());

//Dohvacanje highscore liste
app.get('/highscores', async (req, res) => {
    const highscores = await getHighscores();// Dohvaćamo trenutnu highscore listu
   
    res.json(highscores); // Vraćamo  listu kao json
})

app.post('/highscores', async (req, res) => {
    const newHighscore = req.body;// Pretpostavljamo da tijelo zahtjeva sadrži objekt sa "name" i "score"
    const highscores = await getHighscores();//Dohvati trenutne highscoree

    highscores.push(newHighscore);//Dodaj novi rezultat na listu

    highscores.sort((a, b) => b.score - a.score);// Sortiraj i sacuvaj azuriranu listu
   
    await saveHighscores(highscores); // Spremamo updatiranu listu
    res.json({ message: "New highscore", highscores: highscores.slice(0, 5)});//Vracamo odgovor
})

app.listen(PORT, () => {
    console.log('Server located on', PORT);//Na kojem portu u postmanu vidimo rezultat
})