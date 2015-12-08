import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin,{

	model: function(params) {
		// console.log("hell")
		// console.log(this.modelFor('posts').findBy('id', params.post_id).title)
		 //TODO
     return [this.store.find('post', params.post_id)]
		//return [this.modelFor('posts').findBy('id', params.post_id)];
		
	}
});
