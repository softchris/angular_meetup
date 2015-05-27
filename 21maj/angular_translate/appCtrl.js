angular
	.module('app')
	.controller('appCtrl', function($scope,$translate){
		$scope.switchLanguage = function(lang){
			$translate.use(lang);
		}
		
		$scope.apa ="monkey";
});