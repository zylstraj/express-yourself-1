'use strict';

var bodyparser = require("body-parser");
var Inventory = require('./models');
//GET
function getInventory(res){
  Inventory.find(function(err, inventory) {
    if(err)
      res.send(err)
    res.json(inventory);
  });
}
//POST
module.exports = function(router) {
  router.use( bodyparser.urlencoded({extended: true}) );
  router.use( bodyparser.json() );

  router.get('/inventory', function(req, res) {
    getInventory(res);
  });

  router.post('/inventory', function(req, res) {
    console.log('test');
    Inventory.create({
      itemName : req.body.itemName,
      price : req.body.price,
      quantity : req.body.quantity,
      done : false
    })
    res.json(req.body);
  });
  //DELETE
  router.delete('/inventory', function(req, res) {
    Inventory.remove({
      _id : req.params.inventory_id
    }, function(err, inventory) {
      if (err)
        res.send(err);

      getInventory(res);
    });
  });
};

