# Angular Restify
## Background & Motivation for Angular Restify
Restify is meant to be that short library that helps you get going with the backend in your angular project.

It is similar to Angular Resource but with a big difference. Namely how transformRequest works. The idea with angular resource is to always have an active record both that you interact with and also get back from a CRUD operation. 

### Example - with angular resource

	$resource(url,params,actions).save(entity,function(savedEntity){
		
	});

Here the **entity** and **savedEntity** is a Resource object with CRUD operations on it like save, update, remove, query etc..

Of course you can intercept how a response is parsed by specifying your own action and specifying transformRequest, like so:

	var actions = {
		get : {
			url : getUrl,
			method : 'GET',
			transformRequest : function(response){
				return new DomainObject(response);
			}
		}
	}

You think you will get back a DomainObject with all its methods when doing this right?

	$resource(url,params,actions).save(entity,function(savedEntity){
		
	});
WRONG, savedEntity copies all properties from DomainObject but is still a Resource object but without the prototype methods of DomainObject. 


### Example - with angular_restify

	var rest = new $rest(url,actions);
	rest.save(entity).then(function(savedEntity){
		
	})
Here **entity** is an object literal and **savedEntity** is an object literal. Like angular resource you can also specify your own actions, like so:

	var actions = {
		get : {
			url : getUrl,
			method : 'GET',
			transformRequest : function(response){
				return new DomainObject(response);
			}
		}
	}
BUT with a big difference. What comes back is a DomainObject, not a Resource object with DomainObject properties.

## How to use

### Installation

	bower install angular_restify
### Usage
Add a script reference to rest.js

	<script arc="bower_components/angular_restify/rest.js" />

Add a module reference to *restify*, like so

	angular.module('myApp',[ 'restify' ]);
Use it by injecting and instantiating $rest, like so:

	rest = new $rest(baseUrl + '/Books',actions);
#### CRUD example

app.js

	angular.module('myApp',[ 'restify' ])
		.controller('appCtrl',function($scope, $rest){
			var rest = $rest(baseUrl + '/Books');
			rest.save({ title : 'Farewell to arms', author : 'Hemingway'  }).then(function(savedBook){

			});

			rest.update({ id : 11, title : 'Farewell to arms - updated title', author : 'Hemingway'  }).then(function(updatedBook){

			});

			rest.get().then(function(allBooks){

			});

			rest.get({ id : 11 }).then(function(bookWithId){

			});

			rest.remove({ id : 13 }).then(function(removedEntity){

			});
		})

#### Custom method - example

		var actions = {
			booksByAuthorAndYear : {
				method : 'GET',
				url : baseUrl + '/Books/:author/:year',
				replaceParams : [ 'author','year' ]
				transformResponse : function(response){
					var books = [];
					response.forEach(function(book){
						books.push(new Book(book));
					})
	
					return books;
				}
			}
		}

		var rest = $rest(baseUrl + '/Books', actions);
		rest.booksByAuthorAndYear({ author : 11, year : 1890 }).then(function(books){

		});

For a complete code example, please refer to /example directory. It is a complete frontend and backend in nodejs with express.





  


