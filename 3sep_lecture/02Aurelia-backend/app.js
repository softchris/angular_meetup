import { StaticService } from './staticService';
import { DataService } from './dataService';

export class App{
	constructor(){
		var srv = new StaticService();
		var dataSrv = new DataService();

		


		this.movies = srv.getMovies();
		dataSrv.getAvengers().then( response => {  
			this.avengers = response.content;
		});
	}
}