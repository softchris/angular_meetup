/*
	- filter is bad because it takes 2 visits for every property change
	- 
*/

(function(){
	'use strict';

	angular
		.module('app',[])
		.controller('appCtrl', AppCtrl )
		.factory('dataSrv', DataSrv )
		.factory('httpInterceptor', HttpInterceptor )
		.config(function($httpProvider){
			$httpProvider.interceptors.push('httpInterceptor');
		});

	AppCtrl.$inject = ['$scope','dataSrv','$rootScope'];

	function AppCtrl($scope, dataSrv, $rootScope){
		dataSrv.getProducts().then(function(data){
			$scope.products = data;
		},function(err){
			$scope.error = err;
			
		});

		$rootScope.$on('not found', function(ev,data){
			$scope.error = data;
		});

		/*
		dataSrv.getData(true).then(function(data){
			$scope.products = data;
		},function(err){
			// log or show to the user
			$scope.error = err;
			
		});*/
	}

	// always handle error, at some level in the service call/controller or interceptor
	// use $q when aggregating data, not the anti pattern
	// use chaining when order is important

	function HttpInterceptor($rootScope, $q){
		return {
			responseError : function(response){
				var deferred = $q.defer();
				if (response.status === 401) {
		            deferred.reject('unathorized');
		        }else if (response.status === 404) {
		            deferred.reject('not found');
		        }

		        return deferred.promise;
			}
		}
	}


	DataSrv.$inject = ['$http','$q'];

	function DataSrv($http, $q){
		return {
			getProducts : getProducts,
			getData : getData
		}

		function getData(reject){
			var deferred = $q.defer();

			if(reject){
				deferred.reject('rejected');
			} else{
				deferred.resolve('success');
			}

			return deferred.promise;
		}

		function getProducts(){
			return $http.get('/products2.json');
		}
		
	}

})();