'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('LogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
