import DS from 'ember-data';

export default DS.Model.extend({
    post: DS.hasMany('post'),
    
    name: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    website: DS.attr('string')
});
