import Controller from '@ember/controller';

export default Controller.extend({
    successMessage:'',
    errorMessage:'',
    maximumStar:5,
    currency:'SEK',
    
    //hotelStars:[1,2,3,4],
    
    actions:{
        addHotel(){
            //validation
            if(this.get('name')==='' || this.get('name')===undefined ||
               this.get('city')==='' || this.get('city')===undefined ||
               this.get('star')==='' || this.get('star')===undefined ||
               this.get('price')==='' || this.get('price')===undefined ||
               this.get('currency')==='' || this.get('currency')===undefined ||
               this.get('description')==='' || this.get('description')===undefined){
               this.set('errorMessage','Please complete all fields.');
            }//end validation
            else{
                //add default picture 
                if(this.get('picture')===''){
                    this.set('picture','https://images.pexels.com/photos/357547/pexels-photo-357547.jpeg');
                }
                //end add default picture                  
                let newHotel = this.get('store').createRecord('hotel',{
                name: this.get('name'),
                city: this.get('city'),
                star: this.get('star'),
                price: this.get('price'),
                currency: this.get('currency'),
                discount: this.get('discount'),
                description: this.get('description'),
                picture: this.get('picture')
                });

                newHotel.save();
                this.set('successMessage','Hotel added successfully.');
                this.set('errorMessage','');

                //clear form
                this.setProperties({
                    name:'',
                    city: '',
                    star: '',
                    price: '',
                    currency: '',
                    discount: '',
                    description: '',
                    picture: ''
                    });
            }
           
        },
        //validateInputStars
        validateInputStars(value){
            let maxStar = this.get('maximumStar');
            if(!isNaN(value)){
                if(value<0 || value>maxStar){
                    //alert('star must be between 0 and '+maxStar);
                    this.set('errorStar','star must be between 0 and '+maxStar);
                }else{
                    this.set('errorStar','');
                }
            }else{
                //alert('star must be number between 0 and '+maxStar);
                 this.set('errorStar','star must be number between 0 and '+maxStar);
            }   
        }, //end validateInputStars
        //validateInputPrice
        validateInputPrice(value){
            if(isNaN(value)){
                this.set('errorPrice','price must be a number.');
            }else{
                this.set('errorPrice','');
            }
        }, //end validateInputPrice
        //validateInputPrice
        validateInputDiscount(value){
            if(isNaN(value)){
                this.set('errorDiscount','Discount must be a number.');
            }else{
                this.set('errorDiscount','');
            }
        } //end validateInputPrice
    }
});

