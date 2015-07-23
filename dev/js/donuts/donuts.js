'use strict';

console.log("load controller.js");

module.exports = function(app) {
  console.log("controller.js inside function");
  app.controller('appController', ['$scope', 'resource', function($scope, resource) {

    var Donut = resource('donuts');
    //tell resource to have this name - this goes to app.factory in resourceService - this factory is going to return a resource- - by name of resource, and it takes one dependency which is resourceNmae - called it and passed in a name 'settings' - called this service, we are now defining what the insides of this object is: very similar to a constructor function:

    var getAll = function(){
      Donut.getAll(function(response){
        console.log("inside getall", response);
        $scope.donuts = response;
      });
    };
    getAll();

    $scope.submitForm = function(donut) {
      console.log(donut.day);
      Donut.submit(donut, function(response) {
        getAll();
      });
    };

    $scope.destroy = function(id) {
      console.log(id);
      Donut.destroy(id, function(response) {
        getAll();
      });
    }
    $scope.edit = function(donut) {
      donut.editing = false;

      Donut.edit(donut, function(response) {
        getAll();
      });
    };
    //$scope.edit = function(donut) {
      //donut.editing = false;
      //console.log(donut);

      //$http.put('/donuts/' + donut._id, donut).success(function(response){
      //  getAll();
      //});

  }])};

