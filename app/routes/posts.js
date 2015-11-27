import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		 var posts = [
		{
		id:'1',
		title:'lipsome vesicle',
		body:"A liposome is a spherical vesicle"},		
		{
		id:'2',
		title:'lipsome vesicle',
		body:"A liposome is a sp"}
]
	//console.log(posts)
		return posts
	}
});
