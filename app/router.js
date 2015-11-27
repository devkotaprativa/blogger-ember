import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', {path: '/'});
  this.route('about');
  this.resource('contact', function(){
      this.resource('phone')
      this.resource('email')
  });

  this.resource('recent-comments');
  this.resource('post', {path: 'posts/:post_id'});
});

export default Router;
