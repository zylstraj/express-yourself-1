'use strict';

require('angular/angular');

var donutApp = angular.module('donutApp', []);

require('./donutcontroller/controller.js')(donutApp);
