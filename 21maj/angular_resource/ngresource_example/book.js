app.factory('Book',function($resource, DomainBook, $q){
	var baseUrl = 'http://localhost:8000/api';
	
	return $resource( baseUrl + '/Books/:id',{ id: '@_id', genre : '@_genre', year : '@_year' }, {
	    update: {
	      method: 'PUT' // this method issues a PUT request
	    },
		booksWithAuthor : {
			url : baseUrl + '/Books/Author/:id',
			method : 'GET',
			isArray : true,
			transformResponse : function(result, headersGetter){
				var books = angular.fromJson(result);
				var domainBooks = [];
				books.forEach(function(book){
					domainBooks.push(new DomainBook(book));
				});
				
				return domainBooks;
			}
		},
		booksByGenreAndYear : {
			url : baseUrl + '/Books/Genre/:genre/Year/:year',
			isArray : true
		}
  });
});
