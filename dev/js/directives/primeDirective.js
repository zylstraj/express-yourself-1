'use strict';

module.exports = function(app) {
  app.directive('primeDirective', function() {
    return {
      //return an object with a couple of different properties
      restrict: 'AC',
      template : '<h2>{{someVal}}</h2><input type="text" data-ng-model="someVal">'
    }
  })
};
