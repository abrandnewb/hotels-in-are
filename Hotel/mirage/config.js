export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
    /*this.namespace = '/api';
    this.get('/hotels', function(){
        return {
            data:[
        {
                type: 'hotel',
                id:'holiday-club',
                attributes:{
                    name: 'Holiday Cub',
                    star: 4,
                    city: 'Åre',
                    discount: '2%',
                    price: 900,
                    currency:'SEK',
                    picture:'https://thumbnails.expedia.com/CEPKkl_VmR-bNZEj0Eol7r8jwGE=/773x515/smart/filters:quality(60)/images.trvl-media.com/hotels/3000000/2310000/2303900/2303865/2303865_37_b.jpg'
                }
            },{
                type: 'hotel',
                id:'holiday-club',
                attributes:{
                    name: 'Fjäll Gården',
                    star: 3,
                    city: 'Åre',
                    discoount: '5%',
                    price: 400,
                    currency:'SEK',
                    picture:'https://dynassets1.gavekortet.dk/2/products/presentation_nxt/101159.jpg'
                }
            }]
            };
        });*/
  //for typicode REST 
  this.urlPrefix = 'https://jsonplaceholder.typicode.com';
  

  // Requests for posts
  this.get('/posts');
  this.get('/posts/:id');
  this.post('/posts');
  this.del('/posts/:id');
  this.patch('/posts/:id');

  this.get('/users');
  this.get('/users/:id');
  this.post('/users');
  this.del('/users/:id');
  this.patch('/users/:id');
  
  this.passthrough('/posts');
  this.passthrough('/users');
}
