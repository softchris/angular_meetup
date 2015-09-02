import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import {Router} from 'aurelia-router';


@inject( HttpClient, Router )
export class ProductDetail{
	constructor(httpClient, router){
		this.httpClient = httpClient;
		this.router = router;
	}

	activate(params){
		this.httpClient.get('/data/products.json').then(response => {
			var product = response.content.find( x => x.id === parseInt(params.id) );
			this.product = product;
		});
	}

	goToList(){
		//this.router.navigate(url)
		console.log(this.router);
	}
}