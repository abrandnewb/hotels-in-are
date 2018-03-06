import DS from 'ember-data';

export default DS.Model.extend({
        name: DS.attr('string'),
        star: DS.attr('number'),
        city: DS.attr('string'),
        discount: DS.attr('number'),
        price: DS.attr('number'),
        currency: DS.attr('string'),
        description: DS.attr('string'),
        picture: DS.attr('string')   
});
