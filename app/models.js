'use strict';

var mongoose = require('mongoose');

var inventorySchema = new mongoose.Schema({
  itemName: String,
  price: Number,
  quantity: Number,
  done: Boolean
});

module.exports = mongoose.model('Inventory', inventorySchema);

