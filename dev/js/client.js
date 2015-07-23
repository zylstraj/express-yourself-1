'use strict';

console.log("load client.js");

require('angular/angular');

console.log("after ang require");

var donutApp = angular.module('donutApp', []);

console.log("donutApp", donutApp);


require('./donutcontroller/controller.js')(donutApp);
