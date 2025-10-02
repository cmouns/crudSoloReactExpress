import express from "express";
import cors from "cors";


const app = express();
const port = 8081;

const corsOptions = {
  origin: ['http://localhost:3000', 
           'http://localhost:8081'
        ],
  optionsSuccessStatus: 200,// some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders : ['Content-Type', 'Authorization'],
  credentials: true,
}


app.listen(port,() => {
    console.log(`Server is running on port : ${port}`);
})