app.service('BookService', BookService);

function BookService(Book, DomainBook, $q){
	this.get = function(id){
		var deferred = $q.defer();
	
		Book.get({ id : id}, function(book){
			return deferred.resolve(new DomainBook(book));
		});
	
		return deferred.promise;	
	};
	
}
