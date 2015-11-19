/*
	- filter is bad because it takes 2 visits for every property change
	- 
*/

(function(){
	'use strict';

	angular
		.module('app',[])
		.controller('appCtrl', AppCtrl )
		

	AppCtrl.$inject = ['$scope','$timeout'];

	function AppCtrl($scope, $timeout){
		$scope.prop = 'aaa';
		
		$timeout(function(){
			var watchers = $scope.$$watchers; 
			console.log('everything started');
		},0);

		
		$scope.$watch('prop', function(newVal, oldVal){
			
			console.log('watch prop');
		});

		/*
		$scope.$watch('prop2', function(newVal, oldVal){
			console.log('watch prop2');
		});

		$scope.$watch('prop3', function(newVal, oldVal){
			console.log('watch prop3');
		});*/
	}

	
})();