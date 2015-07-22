'use strict';

var bodyParser = require('body-parser');
<<<<<<< HEAD
var Donut = require('../models/donut-model.js');
=======
var Donut    = require('../models/donut-model.js');

console.log("in routes js");
>>>>>>> 4d26517482631363f8e751b9ff29b70dfd987193

module.exports = function(router) {
  console.log("in module exports routes js");
  router.use(bodyParser.json());
  router.get('/donuts', function(req, res) {
<<<<<<< HEAD
    console.log('Index router');
=======
    console.log('hit the get');
>>>>>>> 4d26517482631363f8e751b9ff29b70dfd987193
    Donut.find({}, function(err, data) {
      if (err) {
        console.log(err);
      }
      return res.json(data);
    });
  });

  router.post('/donuts', function(req, res) {
    console.log('You hit the post')
<<<<<<< HEAD
    var newSetting = new Donut(req.body);
=======
    var newDonut = new Donut(req.body);
>>>>>>> 4d26517482631363f8e751b9ff29b70dfd987193
    console.log(req.body);
    newDonut.save({}, function(err, data) {
      if (err){
        errorResponse(err, res);
        return;
      }
      res.json(data);
    });
  });

  router.put('/donuts/:id', function (req, res) {
    console.log('Hit update route');
    var updatedDonut = req.body;
    delete updatedDonut._id;

    Donut.update({'_id': req.params.id}, updatedDonut, function (err, data) {
      console.log(req.body);
      if (err) {
        errorResponse(err, res);
        return;
      }
      res.json({msg: 'updated successfully'});
    });
  });

  router.delete('/donuts/:id', function(req, res) {
    console.log('You hit delete');
    Donut.remove({'_id': req.params.id}, function(err, data) {
      if (err) {
        errorResponse(err, res);
        return;
      }
      res.json({msg: "DELETED"})
    });
  });
};
