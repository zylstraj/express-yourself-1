'use strict'; //cannot use type coercion, cannot use variables without using var

//application setup
var express = require('express');
var app = express(); //gets express into our main server file
var path = require('path');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false});
var port = 3000;

var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-yourself/data');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//inventory data model
var productRecordSchema = new mongoose.Schema({
  itemName: String,
  price: Number,
  quantity: Number
});

var productRecordModel = mongoose.model('productRecordModel', productRecordSchema, 'productcollection');

/* GET productlist page. */
app.get('/inventory', function(req, res) {
  var db = req.db;
  var model = req.model;
  model.find(function (err, docs) {
    console.log("docs", docs);
    // res.render('productlist', {

    // });
  });
});


/*-----------------*/
var donuts = {
  'Monday'    : 'Jelly Donut',
  'Tuesday'   : 'Lemon Poppyseed',
  'Wednesday' : 'Bear Claw',
  'Thursday'  : 'Glazed',
  'Friday'    : 'Sprinkles',
  'Saturday'  : 'Double Donut Day',
  'Sunday'    : 'Boston Cream'
};
app.get('/donuts/:name', function(req, res){
  var description = donuts[req.params.name];
  res.json(description);
});
app.post('/donuts', parseUrlencoded, function(req, res){
  var newDonut = req.body;
  donuts[newDonut.name] = newDonut.description;
  console.log(req.body);
  res.status(201).json(newDonut);
});

app.put('/donuts/:name', function(req, res){
  console.log("I am putting");
});

app.delete('/donuts/:name', function(req, res){
  console.log("I am deleting");
});

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

//static services
app.use(express.static(path.join(__dirname, 'public'))); //serve everything inside public directory

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on " + port);
});
