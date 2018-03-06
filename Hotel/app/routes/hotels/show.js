import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        //return this.get('store').findAll('hotel');
        return this.get('store').findRecord('hotel', params.hotel_id);
    }     
});
