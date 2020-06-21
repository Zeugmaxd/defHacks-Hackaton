//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname +"/date.js");  //requiring a local js

// console.log(date());

const app = express();
const items = ["Add a new item below. Strike out."];
const workItems = [];

app.set('view engine', 'ejs'); //view engine looks for files to render: views folder
app.use(bodyParser.urlencoded({extended: true}));  //tells our app to use bodyParser

app.use( express.static("public"));


                        /*
                        *Home ROUTE
                        */

app.get("/", function(req, res) {
  res.sendFile(__dirname +"/index.html");
});

                          /*
                          *Study Tracker ROUTE
                          */

app.get("/study-tracker", function(req, res) {

  const thisDay = date.getDate(); //calling the function bound to the const date() which is an export from date.js
//no need to create an array, we can use toLocaleDateString method

/*
*DATE CUT AND MOVED TO DATE.JS MODULE
*/
//to render the list.ejs file in the views folder. The view engine looks for this file in the views folder. Must be named "views"

//res.render must be together. All the ejs templates must be together
  res.render('list', {
    listTitle: thisDay,
    newItems: items
    //replace newItems in the ejs file with items on our server
    //tells ejs to replace what it's looking for- newItems- with what we have- items
  });

});

//to receive new to do lists from list.ejs

app.post("/study-tracker", function (req, res) {
  const item = req.body.nextItem;

  if (req.body.list === "Task") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/study-tracker");
  }

  //"Study now" received from the form
          /* items.push(item);  */
  //"Study now" pushed to an array
        /* res.redirect("/"); */
  //Pushes everything back to get, which res.renders the list.ejs
  //The array has already been updated globally
});

                              /*
                  f            *Task List ROUTE
                              */

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Task List", newItems: workItems});
});

app.post("/work", function(req, res) {
  let item = req.body.nextItem;
  workItems.push(item);
  res.redirect("/work");
});

                              /*
                              *Timer ROUTE
                              */

app.get("/timer", function(req, res) {
  res.render("timer", {listTitle: "Timer"});
});

app.listen(8000, function() {
  console.log("Server listening on port 8000");
});
