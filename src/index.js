//jshing esversion: 6
import express from "express";
import mongoConnect from "./config/mongoConnect.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json())
const PORT = 8080;

app.get("/" ,(req,res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
    mongoConnect();
});
