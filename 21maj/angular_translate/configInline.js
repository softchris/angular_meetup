angular
	.module('app')
	.config(function($translateProvider){
		$translateProvider.translations('en', {
		    TEST: 'testing testing, one two',
		    APPLICATION_HEADER: 'My awesome app',
			SAVE : 'Save',
			CHANGE : 'change language to english',
			CHANGE_SV : 'change language to swedish'
		})
		.translations('sv', {
			TEST : 'testar 1 2',
			APPLICATION_HEADER: 'Min grymma app',
			SAVE : 'Spara',
			CHANGE : 'byt språk till engelska',
			CHANGE_SV : 'byt språk till svenska'
		});
		
		$translateProvider.useStaticFilesLoader({
			prefix: '/langs/',
			suffix: '.json'
		});
		
		
		$translateProvider.preferredLanguage('en');
});