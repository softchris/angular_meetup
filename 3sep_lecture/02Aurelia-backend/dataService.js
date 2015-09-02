import { HttpClient } from "aurelia-http-client"

export class DataService{
	constructor(){
		 this.http = new HttpClient();
	}

	getAvengers(){
		return this.http.get('/data/avengers.json');
	}
}