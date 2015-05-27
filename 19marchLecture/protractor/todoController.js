(function(){
	var controllers = angular.module('controllers');
	controllers.controller('todoController',TodoController);

	function TodoController($scope){
		$scope.todos = [  ];
		$scope.add = function(){
			$scope.todos.push($scope.todo);
		}
	}
})();