import Component from '@ember/component'; 

export default Component.extend({
    tagName: 'nav',
     /*classNameBindings: ['isUrgent'],
      classNameBindings: ['isUrgent:urgent'],
       classNameBindings: ['isEnabled::disabled'],
    isUrgent: true,
    classNameBindings: ['priority'],
    priority: 'highestPriority' //if string the string will be used as a class name
    */
    classNameBindings: ['isUrgent:enabled:disabled'],
    isUrgent:false,
    error:null,
    actions:{
     required(event){
         if(!event.target.value){
             this.set('error','this field is required');
         }       
     },
   
 }
});