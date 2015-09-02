import { customElement, bindable,inject } from 'aurelia-framework';
import { JediService } from '../jediService';

@inject( JediService )
@customElement('user-detail')
@bindable({
	name : 'user',
	changeHandler : 'userChanged'
})
export class UserDetail{
	@bindable user;
	constructor(jediService){
		this.srv = jediService;
		
	}

	userChanged(newVal, oldVal){
		if(newVal){
			this.srv.getJedis().then( response =>{
				var jedis = response.content;
				this.jedi = jedis.find( x => x.id === newVal.id );
			});
		}
		
	}
}