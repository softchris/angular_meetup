export class App{
	configureRouter(config, router){
		this.router = router;
		config.title = "Aurelia";
		config.map([
			{ 
				route : ['', 'home'], 
				name:'home',
				nav:true, 
				title : 'home',
				moduleId : 'home/index'
			},
			{ 
				route : 'about', 
				name:'about',
				nav:true, 
				title : 'about',
				moduleId : 'about/index' 
			},
			{ 
				route : 'products', 
				moduleId: 'products/products',
				name:'products',
				nav:true, 
				title : 'products' 
			},
			{ 
				route : 'details/:id', 
				name:'details',
				title : 'details',
				moduleId : 'products/productDetail'
			},
			{
				route: 'products',
				name : 'products',
				title : 'products',
				moduleId : 'products/shell'
			}
		]);

		
	}
}