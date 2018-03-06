import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
    queryParams: ['starring'],
    /*starring:null,*/
    isLoggedIn:true,
    maximumStar:5,
    currency:'SEK',
    
    filteredByStar: computed('starring','model', function(){
        let hotels = this.get('model');
        let starring = this.get('starring');
        //console.log(starring);
        if(hotels){
            //return this.get('store').query('hotels', {filter:{star:starring}});
            //return hotels.findRecord('starring',starring);
            this.get('store').findRecord('hotel',2).then(function(record){
                return record;
                });
        }
        else{
            return hotels;
        }
    }),
    actions:{
            deleteHotel(id){
                let x = confirm('Are you sure you wnat to delete?');
                if(x==true){
                    //enter password
                    if(prompt('Enter password')=='123'){
                                           
                        this.get('store').findRecord('hotel',id).then(function(record){
                        record.deleteRecord();

                        record.save();
                        });
                    }
                }
            },
            
            filterByStar(starNo){ //{ filter: { name: 'Peter' } }
                //let x = this.get('store').findRecord('hotel',{filter: {star:starNo}});
                //let x = this.get('store').findRecord('hotel',{filter: {star:starNo}});
                this.get('store').findRecord('hotel',starNo).then(function(record){
                    alert(record.title);
                });
                
            }
    }
});
