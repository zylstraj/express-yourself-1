'use strict';

var bodyParser = require('body-parser');
var Donut = require('../models/donut-model.js');

module.exports = function(router) {
  router.use(bodyParser.json());
  router.get('/donuts', function(req, res) {
    console.log('Index router');
    Donut.find({}, function(err, data) {
      if (err) {
        console.log(err);
      }
      return res.json(data);
    });
  });

  router.post('/donuts', function(req, res) {
    console.log('You hit the post')
    var newSetting = new Donut(req.body);
    console.log(req.body);
    newSetting.save({}, function(err, data) {
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
