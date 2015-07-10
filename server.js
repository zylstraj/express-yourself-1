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


/* GET productlist page. */
// app.get('/inventory', function(req, res) {
//   var db = req.db;
//   var model = req.model;
//   model.find(function (err, docs) {
//     console.log("docs", docs);
//     // res.render('productlist', {

//     // });
//   });
// });


app.post('/inventory', parseUrlencoded, function(req, res) {
  productcollection.create({
    itemName : req.body.itemName,
    price : req.body.price,
    quantity : req.body.quantity,
    done : false
  })
  console.log(req.body);
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
app.get('/inventory', function (req, res) {
  res.render('inventory');
});

//static services
app.use(express.static(path.join(__dirname, 'public'))); //serve everything inside public directory

//app listener
app.listen(port, function(){  //on port 3000
  console.log("my awesome server is running on " + port);
});
