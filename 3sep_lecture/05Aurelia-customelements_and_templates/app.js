export class App{
	constructor(){
		this.title = "My Aurelia app";
		this.jedis = [{
			name : 'Luke Skywalker',
			id : 1
		},{
			name : 'Anakin Skywalker',
			id : 2
		}];

		this.selectedJedi = null;
		this.user = {
			name : 'chris'
		};
	}
}