(function(){
	'use strict';

	var testComponentOptions = {
		bindings: { 
	    	title: '@',
	    	callback : '&',
	    	prop : '<'
	  	},
	  	transclude: true,
	  	controller : function($scope){
	  		var me = this;
	  		function save(){
	  			me.callback();
	  		}

	  		function change(){
	  			me.prop = 'component';
	  		}

	  		this.save = save;
	  		this.change = change;
	  	},
	  	template:
	    '<div>' + 
	      '<h3>{{$ctrl.title || "No title"}}</h3>' + 
	      '<button ng-click="$ctrl.change()" >Change parent</button>  <i><ng-transclude>Empty</ng-transclude></i><button ng-click="$ctrl.save()" >save</button>{{ $ctrl.prop }}' +
	    '</div>'
	};

	angular
		.module('app', [ 
			'ngNewRouter' 
		])
		.component('testComponent', testComponentOptions )
		.controller('appCtrl', AppCtrl)
		.directive('testMultiTransclusion', function(){
			return {
				transclude : {
					'title' : 'titlePart',
					'footer' : 'footerPart'
				},
				restrict : 'E',
				replace : true,
				template : `
					<div style="border: solid 1px lightgray;">
						<h1 ng-transclude='title'></h1>
						<div>body content</div>
						<div ng-transclude='footer'></div>
						<div ng-transclude ></div>
					</div>
				` 
			};
		});
		

	AppCtrl.$inject = [ '$scope','$router' ];

	function AppCtrl($scope, $router){
		$router.config({ path: '/', component: 'home' });

		$scope.update = function(){
			console.log('calling update');
		};

		$scope.change = function(){
			$scope.obj.test = 'changed';
		}

		$scope.obj = {
			test : 'test'
		};
	}

	

})()