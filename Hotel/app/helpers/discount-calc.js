import { helper } from '@ember/component/helper';

export function discountCalc(params, namedArgs/*, hash*/) {
  if(params>0){
     let discount = params/100;
      let newPrice = namedArgs.price - (discount*namedArgs.price);
      return newPrice;
  }
 else{
        return namedArgs.price;
    }    
}

export default helper(discountCalc);
