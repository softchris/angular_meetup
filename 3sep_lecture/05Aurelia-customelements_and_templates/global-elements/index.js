export function configure(aurelia){
	// it finds it but it doesnt work 
	aurelia.globalResources('time/time');

	// it finds this one though
	aurelia.globalResources('test');
}