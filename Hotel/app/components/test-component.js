import Component from '@ember/component';

export default Component.extend({
    actions:{
         drop(){
        alert('dropped');
    },
    sendMessage(){
        alert('messge has been sent. JK!');
    }
    }
});
