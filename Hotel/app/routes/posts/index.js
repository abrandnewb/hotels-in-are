import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('post');
    },
    //to replace model with post in the post route
    setupController(controller, model){
        Ember.set(controller,'posts',model);
    }
});
