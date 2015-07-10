'use strict';

var bodyparser = require("body-parser");
var Inventory = require('./models');

function getInventory(res){
  Inventory.find(function(err, inventory) {
    if(err)
      res.send(err)
    res.json(inventory);
  });
}

module.exports = function(router) {
  router.use( bodyparser.urlencoded({extended: true}) );
  router.use( bodyparser.json() );

  router.get('/inventory', function(req, res) {
    getInventory(res);
  });


  router.post('/inventory', function(req, res) {
    Inventory.create({
      itemName : req.body.itemName,
      price : req.body.price,
      quantity : req.body.quantity,
      done : false
    })
    console.log(req.body);
  });

};
