import Ember from 'ember';

export default Ember.Controller.extend({
	displaying: false,
	actions: {
		showPhoto: function() {
			this.set('displaying', true)
		},
		hidePhoto: function(){
			this.set('displaying', false)
		}
	}
});
