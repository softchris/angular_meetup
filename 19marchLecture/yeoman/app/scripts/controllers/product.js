'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
