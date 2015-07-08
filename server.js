'use strict'; //cannot use type coercion, cannot use variables without using var

//application setup
var express = require('express');
var app = express(); //gets express into our main server file
var path = require('path');
var port = 3000;

var donuts = {
  'Monday': 'Jelly Donut',
  'Tuesday': 'Lemon Poppyseed',
  'Wednesday' : 'Bear Claw',
  'Thursday' : 'Glazed',
  'Friday' : 'Sprinkles',
  'Saturday' : 'Double Donut Day',
  'Sunday' : 'Boston Cream'
};

//view directory setup
app.set('views', path.join(__dirname, 'views'));
//view engine setup
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});
app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/donuts/:name', function(req, res){
  var today = donuts[req.params.name];
  response.json(description);
});

//static services
app.use(express.static(path.join(__dirname, 'public'))); //serve everything inside public directory

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on " + port);
});
