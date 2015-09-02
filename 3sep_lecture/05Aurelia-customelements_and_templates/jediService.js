import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';

@inject( HttpClient )
export class JediService{
	constructor( httpClient ){
		this.client = httpClient;
	}

	getJedis(){
		return this.client.get('/data/jedis.json');
	}
}