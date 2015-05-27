'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
