'use strict'

module.exports = function(app) {
  var errorHandler = function(data) {
    console.log(data);
  }

app.factory('resource', ['$http', function($http){
  return function(resourceName) {
    return {
      getAll: function(callback) {
        $http({
          method: 'GET',
          url: '/' + resourceName
        })
        .success(callback)
        .error(errorHandler);
      },
      submit: function(resource, callback) {
        $http({
          method: 'POST',
          url: '/' + resourceName,
          data: resource
        })
        .success(callback)
        .error(errorHandler);
      },
      edit: function(resource, callback) {
        $http({
          method: 'PUT',
          url: '/' + resourceName + '/' + resource._id,
          data: resource
        })
        .success(callback)
        .error(errorHandler);
      },
      destroy: function(id, callback){
        $http({
          method: 'DELETE',
          url: '/' + resourceName + '/' + id,
          data: id
        })
        .success(callback)
        .error(errorHandler);
      }
    }
  }
}]);
}
// now we are defining our factory and it will return to us a function, and inside that function, it will return to us an object: We want to pass in the resource name:
// Passing in
// return an object which will return a bunch of different functions:

//constructing an object, that we can use... and specify I want to pass in this information.
