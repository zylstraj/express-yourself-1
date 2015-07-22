'use strict';

module.exports = function(app) {
  app.controller('appController', ['$scope', '$http', function($scope, $http) {
    var getAll = function(){
      $http.get('/donutcontroller').success(function(response){
        console.log(response);
        $scope.donuts = response;
      });
    };
    getAll();

    $scope.submitForm = function(donut) {
      console.log(setting);
      $http.post('/donutcontroller', donut).success(function(response) {
        getAll();
      });
    };

    $scope.destroy = function(id) {
      console.log(id);
      $http.delete('/donutcontroller/' + id).success(function(response) {
        getAll();
      });
    }

    $scope.edit = function(donut) {
      donut.editing = true;
      console.log(donut);
    };

  }]);

