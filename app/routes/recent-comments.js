import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	 var comments = [
			{
				id:'1',
				postId:'1',
				text:'great article.Thanks!'
			},
			{
				id:'2',
				postId:'1',
				text:'great article.wow!'
			}
		]
	return comments
	}
});
