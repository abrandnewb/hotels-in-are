import Controller from '@ember/controller';

export default Controller.extend({
    successMessage:'',
    errorMessage:'',
    maximumStar:5,
    actions:{
        editHotel(id){
            var self=this;
            
            let name = this.get('model.name');
            let city = this.get('model.city');
            let star = this.get('model.star');
            let price = this.get('model.price');
            let currency = this.get('model.currency');
            let discount = this.get('model.discount');
            let description = this.get('model.description');
            let picture = this.get('model.picture');
                        
            this.get('store').findRecord('hotel',id).then(function(record){
            record.set('name',name);
            record.set('city',city);
            record.set('star',star);
            record.set('price',price);
            record.set('currency',currency);
            record.set('discount',discount);
            record.set('description',description);
            record.set('picture',picture);
                                    
            record.save();
            self.transitionTo('hotels');
            }); 
        }
    }
});
