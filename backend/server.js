import express from "express";
import cors from "cors";


const app = express();
const port = 8081;

// Permet d'établir la connexion et d'autoriser la connexion entre le front-end (en port 3000) et le backend (en port 8081)
const corsOptions = {
  origin: ['http://localhost:3000', // Autorise les connexions contenant ces URL
           'http://localhost:8081'
        ],
  optionsSuccessStatus: 200,// Renvoi le status 200 si la connexion est bien établis
  methods: ['GET','POST','PUT','DELETE'], // Permet d'autoriser les requetes faites par le front-end contenant ces méthodes.
  allowedHeaders : ['Content-Type', 'Authorization'], // Content-Type : Permet d'envoyer des requetes avec le body en JSON, Authorization : Permet d'envoyer des requetes avec le token dans le header
  credentials: true, // Permet d'envoyer des cookies (utile pour la gestion de session)
}

app.use(cors(corsOptions)); // Utilisation du middleware CORS avec les options définies
app.use(express.json()); // Permet de parser le body des requetes en JSON


app.listen(port,() => {
    console.log(`Server is running on port : ${port}`);
})