import mysql from 'mysql';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host:      process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_NAME,
    port     : process.env.MYSQL_PORT,
});


connection.connect(function(err) {
    if (err) console.log(err.message) ;
    else console.log("Database connected...");
});


const app = express();
const port = "4000";

app.get("/", (req, res) => {
    res.status(200).send("Hello, World!\n");
});

app.get("/server", (req, res) => {
    connection.state === 'authenticated' ?
    res.status(200).send("Hello, MySql!\n") :
    res.status(500).send("[ERROR] Could not authenticate to MySql!\n") ; 
});

app.listen(port, () => {
    console.log(`(🚀) Listening on http://localhost:${port}`);
});