const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Router = require('./src/routes/index')

//Midlewards
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', Router)

module.exports = app;