import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
		// console.log("hell")
		 console.log(this.modelFor('posts').findBy('id', params.post_id).title)
		 //TODO
		 var post = [this.modelFor('posts').findBy('id', params.post_id)];
		return post;
	}
});
