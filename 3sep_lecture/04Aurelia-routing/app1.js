export class App{
	constructor(){
		
	}

	configureRouter(config, router){
		this.router = router;
		config.title = "Aurelia";
		config.map([
			{ 
				route : ['', 'home'], 
				name:'home',
				nav:true, 
				title : 'home',
				viewPorts : {
					left : {
						moduleId : 'home/index'
					},
					right : {
						moduleId : 'home/index'
					}
				} },
			{ 
				route : 'about', 
				name:'about',
				nav:true, 
				title : 'about',
				viewPorts : {
					left : { moduleId : 'home/index' },
					right : { moduleId : 'about/index'  }
				} 
			},
			{ 
				route : 'products', 
				viewPorts: { 
					left: { moduleId: 'products/products-sale'}, 
					right: { moduleId: 'products/products'} 
				}, 
				name:'products',
				nav:true, 
				title : 'products' 
			},
			{ 
				route : 'details/:id', 
				name:'details',
				title : 'details',
				viewPorts : {
					left : {
						moduleId : 'home/index'
					},
					right : {
						moduleId : 'products/productDetail'
					}
				} 
			}
		]);

		
	}
}