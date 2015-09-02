export class Shell{
	configureRouter(config, router){
		this.router = router;

		config.map([
			{ 
				route : '/', 
				name : 'productoverview',
				title : 'overview',
				viewPorts : {
					left : {
						moduleId : 'products/products-sale'
					},
					main: {
						moduleId : 'products/products' 		
					}
				}
				
			}
		]);
	}
}