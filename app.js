//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname +"/date.js");  //requiring a local js

// console.log(date());

const app = express();
const items = ["Be Happy","Add a new item below"];
const workItems = [];

app.set('view engine', 'ejs'); //view engine looks for files to render: views folder
app.use(bodyParser.urlencoded({extended: true}));  //tells our app to use bodyParser

app.use( express.static("public"));
