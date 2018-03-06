import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function starGenerator(params/*, hash*/) {
  let star = Number(params);
let imgUrl = 'http://www.freepngimg.com/download/star/8-yellow-star-png-image.png';
        return htmlSafe(`<img src="${imgUrl}" width="20px">`.repeat(star));
}

export default helper(starGenerator);

