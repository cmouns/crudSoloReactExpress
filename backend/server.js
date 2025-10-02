import express from "express";
import cors from "cors";
import mysql from "mysql2"


const app = express();
const port = 8081;

// Permet d'établir la connexion et d'autoriser la connexion entre le front-end (en port 3000) et le backend (en port 8081)
const corsOptions = {
  origin: ['http://localhost:5173', // Autorise les connexions contenant ces URL
           'http://localhost:8081',
           'http://localhost:3000',
        ],
  optionsSuccessStatus: 200,// Renvoi le status 200 si la connexion est bien établis
  methods: 'GET,POST,PUT,DELETE', // Permet d'autoriser les requetes faites par le front-end contenant ces méthodes.
  headers : 'Content-Type, Authorization', // Content-Type : Permet d'envoyer des requetes avec le body en JSON, Authorization : Permet d'envoyer des requetes avec le token dans le header
  credentials: true, // Permet d'envoyer des cookies (utile pour la gestion de session)
}

app.use(express.json()); // Permet de parser le body des requetes en JSON
app.use(cors(corsOptions)); // Utilisation du middleware CORS avec les options définies

const database=  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cda',
})

app.get("/", (req,res)=>{
    const sql = "SELECT * FROM role";
    database.query(sql, (err,data) => {
        if(err) {
            return res.status(500).json({error: "Database error"});
        }
        return res.json(data);
    })

})

app.post("/add", (req,res) =>{
    const sql = "INSERT into role (`name`,`role`) VALUES (?,?)";
    const values = [
        req.body.name,
        req.body.role
    ]
    database.query(sql, values, (err,data)=>{
        if(err){
            return res.json("Error");  
        }
        return res.json(data);
    })
})

app.listen(port,() => {
    console.log(`Server is running on port : ${port}`);
})