import Ember from 'ember';

export default Ember.ObjectController.extend({
	isEditing: false,
	actions:{
		edit: function(){
			this.set("isEditing", true);
		},
		save: function(){
			this.set('isEditing', false);
			var a;
			
			this.store.push(this.get('model').set('title', 'a diffrent title'));
      // debugger
		}
	}
});
