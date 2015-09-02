export class App{
	constructor(){
		this.person = {
			name : 'chris',
			attendLecture : false
		};

		this.mealtypes = [
			'Veg',
			'Meat'
		];

		this.selectedMealType = '';
		this.developers = [{
			'name' : 'java'
		},{
			'name' : '.net'
		},{
			'name' : 'python'
		}];

		this.selectedDeveloperType = null;
	}

	save(){
		console.log(this.person.name);
	}
}