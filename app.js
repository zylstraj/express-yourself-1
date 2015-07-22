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
<<<<<<< HEAD

require('./routes/routes')(settingsRouter);
app.use('/', settingsRouter);
=======

require('./routes/routes')(settingsRouter);
app.use('/', settingsRouter);

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on port: " + port);
});


>>>>>>> 4d26517482631363f8e751b9ff29b70dfd987193

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on port: " + port);
});



