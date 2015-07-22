'use strict'; //cannot use type coercion, cannot use variables without using var

//Application setup
var express = require('express');
var app = express(); //gets express into our main server file

var path = require('path');
var bodyParser = require('body-parser');

var parseUrlencoded = bodyParser.urlencoded({ extended: false});
var port = 3000;

var mongoose = require('mongoose');
var connect = function(mongoose){
  mongoose.connect('mongodb://localhost/express-yourself/data');
}

//static services
app.use(express.static(path.join(__dirname, 'dev'))); //serve everything inside public directory

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on port: " + port);
});
