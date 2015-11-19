/*
	- filter is bad because it takes 2 visits for every property change
	- 
*/

(function(){
	'use strict';

	angular
		.module('app',[])
		.controller('appCtrl', AppCtrl )
		.controller('subCtrl', SubCtrl )
		.controller('subsubCtrl', SubSubCtrl )
		

	function AppCtrl(){
		var vm = this;
		vm.prop = 'app';
	}

	function SubCtrl(){
		var vm = this;
		vm.sub = 'sub'
		
	}

	function SubSubCtrl(){
		
	}

})();