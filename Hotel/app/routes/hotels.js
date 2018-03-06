import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
    starring: {
      refreshModel: true
    }
  },
    model(){
        return this.get('store').findAll('hotel');
    }
});

   