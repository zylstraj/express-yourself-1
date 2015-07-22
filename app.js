'use strict'; //cannot use type coercion, cannot use variables without using var

var mongoose = require('mongoose');
var express = require('express');

var app = express(); //gets express into our main server file

var path = require('path');
var port = 3000;

var settingsRouter = express.Router();

//var connect = function(mongoose){
mongoose.connect('mongodb://localhost/donuts');
//}

//static services
app.use(express.static(path.join(__dirname, 'build'))); //serve everything inside public directory

require('./routes/routes')(settingsRouter);
app.use('/', settingsRouter);

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on port: " + port);
});



