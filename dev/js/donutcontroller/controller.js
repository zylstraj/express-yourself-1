'use strict';

console.log("load controller.js");

module.exports = function(app) {
  console.log("controller.js inside function");
  app.controller('appController', ['$scope', '$http', function($scope, $http) {
    var getAll = function(){
      $http.get('/donuts').success(function(response){
        console.log(response);
        $scope.donuts = response;
      });
    };
    getAll();

    $scope.submitForm = function(donut) {
      console.log(setting);
      $http.post('/donuts', donut).success(function(response) {
        getAll();
      });
    };

    $scope.destroy = function(id) {
      console.log(id);
      $http.delete('/donuts/' + id).success(function(response) {
        getAll();
      });
    }

    $scope.edit = function(donut) {
      donut.editing = true;
      console.log(donut);
    };

  }])};

