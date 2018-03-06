import Component from '@ember/component';

export default Component.extend({
    /*tagName: 'a',
    attributeBindings: ['href'],
    href:'http://google.com'*/
    isLoggedIn:null,
    actions:{
        /*didReceiveAttrs(){
            let discount = this.get('discount');
        },*/
        deleteHotel(id){
            let deleteHotelFromComponent = this.get('deleteHotel');//calling controllers deleteHotel action
            deleteHotelFromComponent(id);
        }
    }
});
