const express = require("express");
const path = require("path");

const app = express();


app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname+"/front.html"));
})

app.use(express.static('static'));


const server = app.listen(5000);
const portNumber = server.address().port;
console.log("port: "+portNumber)