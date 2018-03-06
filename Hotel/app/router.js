import EmberRouter from '@ember/routing/router';
import config from './config/environment';


const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
   
  //to scroll to top during route change
  didTransition() {
    this._super(...arguments);
      window.scrollTo(0, 0);
    }
});

Router.map(function() {
  this.route('hotels',function(){
        this.route('new');
        this.route('show',{path: '/show/:hotel_id'});
        this.route('edit',{path: '/edit/:hotel_id'});
  });
  this.route('info');
  this.route('school');
  this.route('base');
  this.route('posts', function() {
    this.route('user');
  });
  this.route('users');
});

export default Router;
