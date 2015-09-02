import { HttpClient } from 'aurelia-http-client';

export class Jedi{
	activate(data){
		console.log(data);
		this.data = data;

		// eager load the rest
	}

}