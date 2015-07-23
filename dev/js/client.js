'use strict';

console.log("load client.js");

require('angular/angular');

console.log("after ang require");

var donutApp = angular.module('donutApp', []);
console.log("donuts hmmm");
//services
require('./services/resourceService')(donutApp);
console.log("after services require");
//controllers
require('./donuts/donuts')(donutApp);

//directives
require('./directives/primeDirective')(donutApp);
