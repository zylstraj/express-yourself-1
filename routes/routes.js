var bodyParser = require('body-parser');
var Donut = require('../models/donut-model');


// routes ======================================================================

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


  // api ---------------------------------------------------------------------
//GET
app.get('/donuts/:name', function(req, res){
  console.log("Getting...");
  var description = donuts[req.params.name];
  res.json(description);
});

//POST
app.post('/donuts', parseUrlencoded, function(req, res){
  console.log("Posting...");
  console.log("req.body: ", req.body);
  var newDonut = req.body;
  donuts[newDonut.name] = newDonut.description;
  res.status(201).json(newDonut);
  //code here to add pair to DB
});

//PUT
app.put('/donuts/:name', function(req, res){
  console.log("Putting...");
  var key = req.params.name;
  console.log("key", key);
  //code here to assemble key:value pair with name:descript
  //find old value and remove it
  //add new value (to appear like replacing)
});

//DELETE
app.delete('/donuts/:name', function(req, res){
  console.log("Deleting...");
  var key = req.params.name;
  console.log("key", key);
  //code here to find matching key:value pair
  //then remove it from DB
});


// 'use strict';

// var bodyParser = require('body-parser');
// var Setting    = require('../models/Setting.js');

// module.exports = function(router) {
//   router.use(bodyParser.json());
//   router.get('/settings', function(req, res) {
//     console.log('Index router');
//     Setting.find({}, function(err, data) {
//       if (err) {
//         console.log(err);
//       }
//       return res.json(data);
//     });
//   });

//   router.post('/settings', function(req, res) {
//     console.log('You hit the post')
//     var newSetting = new Setting(req.body);
//     console.log(req.body);
//     newSetting.save({}, function(err, data) {
//       if (err){
//         errorResponse(err, res);
//         return;
//       }
//       res.json(data);
//     });
//   });

//   router.put('/settings/:id', function (req, res) {
//     console.log('Hit update route');
//     var updatedSetting = req.body;
//     delete updatedSetting._id;

//     Setting.update({'_id': req.params.id}, updatedSetting, function (err, data) {
//       console.log(req.body);
//       if (err) {
//         errorResponse(err, res);
//         return;
//       }
//       res.json({msg: 'updated successfully'});
//     });
//   });

//   router.delete('/settings/:id', function(req, res) {
//     console.log('You hit delete');
//     Setting.remove({'_id': req.params.id}, function(err, data) {
//       if (err) {
//         errorResponse(err, res);
//         return;
//       }
//       res.json({msg: "It's as if a million souls were screaming out in terror and were suddenly silenced"})
//     });
//   });
// };

