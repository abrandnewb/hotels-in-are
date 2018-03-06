import Component from '@ember/component';

export default Component.extend({
    actions:{
        launchConfirmDialog(){
            this.set('confirmShown',true);
        },
        submitConfirm() {
            let promise = this.get('onConfirm')();
            promise.then(()=>{
                this.set('confirmShown',false);
            });
        },
        submitCancel(){
            this.set('confirmShown',false);
        }
    }
});
