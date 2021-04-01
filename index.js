const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

let app = express();

// converte os dados via post em json
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
app.use(expressValidator());

// chamo o consign incluindo a pasta routes, etc no app
consign().include("routes").include('utils').into(app);

app.listen(3000, '127.0.0.1', () =>{

    console.log("servidor rodando");
});