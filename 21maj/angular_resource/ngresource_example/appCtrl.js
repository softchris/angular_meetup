(function(){
	angular
	.module('app')
	.controller('appCtrl',AppCtrl);
	
	function AppCtrl($scope,Book, BookService, $rest, DomainBook){
		
		BookService.get(1).then(function(aBook){
			console.log(aBook);
		});
		
		$scope.book = Book.get({ id : 20 });
		
		Book.get({ id : 5 }).$promise.then(function(transformedBook){
			console.log(transformedBook.name);
		});
		
		Book.get({ id : 1 },function(result){
			console.log(result.name);
		});
		
		Book.query(function(books){
			console.log(books[0].name);
		});
		
		Book.save({name : 'title'},function(savedBook){
			console.log('test');
		});
		
		Book.update({ id : 1, name : 'my updated title' },function(updatedEntity){
			console.log(updatedEntity.name);
		});
		
		Book.booksWithAuthor({ id : 11 }).$promise.then(function(transformedContent){
			console.log('test');
		});
		
		Book.booksWithAuthor({ id : 11 }, function(booksByAuthor){
			console.log('test');
		});
		
		Book.booksByGenreAndYear({ genre : '13', year : '1890' }, function(creepyBooks){
			console.log('test');
		});
	}	
})();
