/* 
	- filter is bad because it takes 2 visits for every property change
	- an alternative to filter is either a scope watch or ng-change 
	- you need to use debounce or you will have a sluggish experience
*/
(function(){
	'use strict';

	angular
		.module('app',[])
		.controller('appCtrl', AppCtrl )
		.filter('test', TestFilter );

	AppCtrl.$inject = ['$scope'];

	function AppCtrl($scope){
		var initArr = [ 'pelle', 'kalle', 'lisa' ]; 
		
		$scope.$watch('param', function(newVal, oldVal){
			console.log('watch called');
			filter( newVal );
		})

		$scope.change = function(newVal){
			filter( newVal );
		}

		function filter(newVal){
			if(!newVal){
				$scope.arr = initArr;
			} else{
				var filtered = _.select(initArr, function(item) {
  					return item.indexOf( newVal ) !== -1;
				});	

				$scope.arr = filtered;	
			}
		}

		function init(){
			$scope.arr = initArr;
		}

		init();
	}

	// one for change detection
	// one to see if there are new changes

	function TestFilter(){
		return function(arr, param1, param2){
			console.log("filter called");
			if(param1){
				var filtered = _.select(arr, function(item) {
	  				return item.indexOf( param1 ) !== -1;
				});	

				return filtered;
			} else{
				return arr;
			}
		};
	}
})();