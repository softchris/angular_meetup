var app = angular.module('app',['ngResource','restify']);

app.controller('appCtrl',function($scope, $rest, DomainBook){
	var baseUrl = 'http://localhost:8000/api';
	
	var actions = {
		findBooksWithAuthor : {
			method : 'GET',
			url : baseUrl + '/Books/Author/:id',
			replaceParams : [ 'id' ],
			transformResponse : function(books){
				var result = [];
				books.forEach(function(book){
					result.push(new DomainBook(book));
				});
				
				return result;
			}
		},
		booksByGenreAndYear : {
			method : 'GET',
			url : baseUrl + '/Books/Genre/:genre/Year/:year',
			replaceParams : ['genre','year']
		}
	};
	
	var rest = new $rest( baseUrl + '/Books', actions);
	
	rest.findBooksWithAuthor({ id : 111 }).then(function(booksBySameAuthor){
		console.log('test');
	});
	
	rest.booksByGenreAndYear({ genre : 'Horror', year : 1890 }).then(function(booksByQuery){
		console.log('second custom question');
	})
	
	rest.get().then(function(books){
		console.log('test');
	});
	
	rest.get({ id : 11 }).then(function(book){
		console.log('test');
	});
	
	rest.save({ name : 'title'}).then(function(savedBook){
		console.log('saved');
	});
	
	rest.update({ id : 13, name : 'new title' }).then(function(updatedBook){
		console.log('updated');
	});
});

app.factory('DomainBook', function(){
	function DomainBook(bookDto){
		this.title = bookDto.name;
		this.author = bookDto.authorId;
		this.genre = bookDto.genre;
	}
	
	DomainBook.prototype.isHorror = function(){
		return this.genre === 'Horror';
	};
	
	return DomainBook;
});


