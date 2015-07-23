'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donutSchema = new Schema({
  day: String,
  flavor: String,
  description: String
});

module.exports = mongoose.model('Donut', donutSchema);
