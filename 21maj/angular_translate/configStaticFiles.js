angular
	.module('app')
	.config(function($translateProvider){
		$translateProvider.useStaticFilesLoader({
			prefix: '/langs/',
			suffix: '.json'
		});			
					
					
		$translateProvider.preferredLanguage('en');
	});