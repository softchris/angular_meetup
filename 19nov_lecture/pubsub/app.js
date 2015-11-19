/*
	
	- broadcast + emit with normal scope is a bit too much to write if 
	two sibling scopes wants to talk
	better with rootscope emit

	
*/

(function(){
	'use strict';

	angular
		.module('app',[])
		.controller('appCtrl', AppCtrl )
		.controller('usersCtrl', UsersCtrl )
		.controller('clientCtrl', ClientCtrl )

	AppCtrl.$inject = ['$scope'];

	function AppCtrl($scope){
		$scope.$on('user_changed', function(ev, data){
			$scope.user = data;
			$scope.$broadcast('client_changed',data);
		})
	}

	UsersCtrl.$inject = ['$scope'];

	function UsersCtrl($scope){
		$scope.change = function(newUser){
			$scope.$emit('user_changed', newUser);
		}

		$scope.users = [ 'pelle','kalle','lisa' ];
	}

	ClientCtrl.$inject = ['$scope'];

	function ClientCtrl($scope){
		$scope.$on('client_changed', function(ev, data){
			$scope.client = data;
		});
	}

})();