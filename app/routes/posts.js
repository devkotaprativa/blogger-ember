import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin,{

	model: function(){
    //this.get('session').set('data.locale')
    this.notifications.addNotification({
      message: 'Logged in  successfully!',
      type: 'success',
      autoClear: 'true'
    });
		return this.store.findAll('post');
// 		 var posts = [
// 		{
// 		id:'1',
// 		title:'lipsome vesicle',
// 		body:"A liposome is a spherical vesicle"},		
// 		{
// 		id:'2',
// 		title:'lipsome vesicle',
// 		body:"A liposome is a sp"}
// ]
// 	//console.log(posts)
// 		return posts
    
	}
});
