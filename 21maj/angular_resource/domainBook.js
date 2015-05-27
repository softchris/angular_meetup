angular
	.module('app')
	.factory('DomainBook', function(){
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
