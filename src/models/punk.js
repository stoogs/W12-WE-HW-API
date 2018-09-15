const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Punk = function () {
  this.data = null;
}

Punk.prototype.getData = function() {
  const url = ('https://api.punkapi.com/v2/beers?&abv_gt=20');
    const request = new Request(url);
    request.get()
        .then((data) => {
            this.data = data;
            PubSub.publish('Punk:beers-obtained', this.data);
            //Prove Beers are here
            console.log(this.data)
        })
        .catch((message) => {
            console.error(message);
        });
};


module.exports = Punk;
