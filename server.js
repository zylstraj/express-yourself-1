'use strict'; //cannot use type coercion, cannot use variables without using var

//Application setup
var express = require('express');
var app = express(); //gets express into our main server file
var path = require('path');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false});
var port = 3000;

//Data set
var donuts = {
  'Monday'    : 'Jelly Donut',
  'Tuesday'   : 'Lemon Poppyseed',
  'Wednesday' : 'Bear Claw',
  'Thursday'  : 'Glazed',
  'Friday'    : 'Sprinkles',
  'Saturday'  : 'Double Donut Day',
  'Sunday'    : 'Boston Cream'
};

//GET
app.get('/donuts/:name', function(req, res){
  console.log("Getting...");
  var description = donuts[req.params.name];
  res.json(description);
});

//POST
app.post('/donuts', parseUrlencoded, function(req, res){
  console.log("Posting...");
  console.log("req.body: ", req.body);
  var newDonut = req.body;
  donuts[newDonut.name] = newDonut.description;
  res.status(201).json(newDonut);
  //code here to add pair to DB
});

//PUT
app.put('/donuts/:name', function(req, res){
  console.log("Putting...");
  var key = req.params.name;
  console.log("key", key);
  //code here to assemble key:value pair with name:descript
  //find old value and remove it
  //add new value (to appear like replacing)
});

//DELETE
app.delete('/donuts/:name', function(req, res){
  console.log("Deleting...");
  var key = req.params.name;
  console.log("key", key);
  //code here to find matching key:value pair
  //then remove it from DB
});

//setup view directory
app.set('views', path.join(__dirname, 'views'));
//setup view engine
app.set('view engine', 'jade');

//display root
app.get('/', function(req, res){
  res.render('index');
});
//display about
app.get('/about', function (req, res) {
  res.render('about');
});

//static services
app.use(express.static(path.join(__dirname, 'public'))); //serve everything inside public directory

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on port: " + port);
});
