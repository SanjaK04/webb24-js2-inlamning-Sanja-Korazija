import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { getHighscores, saveHighscores } from './highscoredb.js';



const PORT = 3000;
const app = express();

app.use(cors()); 
app.use(express.json());

//Hämta highscore list
app.get('/highscores', async (req, res) => {
    const highscores = await getHighscores();
   
    res.json(highscores); 
})

app.post('/highscores', async (req, res) => {
    const newHighscore = req.body;
    const highscores = await getHighscores();

    highscores.push(newHighscore);//ddera nytt resulat på listan

    highscores.sort((a, b) => b.score - a.score);//Sortera och spara updaterade listan
   
    await saveHighscores(highscores); 
    res.json({ message: "New highscore", highscores: highscores.slice(0, 5)});
})

app.listen(PORT, () => {
    console.log('Server located on', PORT);
})