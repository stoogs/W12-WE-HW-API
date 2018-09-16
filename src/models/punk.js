const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Punk = function () {
  this.data = null;
  this.minAbv = 0;
  this.searchItem = 0;
}



Punk.prototype.bindEventsAbv = function() {
    PubSub.subscribe('MinAbvForm:abv-value', (event) => {
        this.abvNum = event.detail;
        //this.minAbv = (abvNum);
        console.log(this.abvNum)
        this.getDataAbv(this.abvNum);
    });
}
Punk.prototype.bindEventsBeer = function() {
    PubSub.subscribe('BeerSearchForm:beer-name', (event) => {
        this.searchItem = event.detail;
        //this.minAbv = (abvNum);
        console.log(this.searchItem)
        this.getDataBeer(this.searchItem);
    });
}
    Punk.prototype.getDataAbv = function (minAbv) {
        const url = (`https://api.punkapi.com/v2/beers?&abv_gt=${minAbv}`);
        console.log(url)
        const request = new Request(url);
        request.get()
        .then((data) => {
            this.data = data;
            //publish beers to result_view
            PubSub.publish('Punk:beers-obtained', this.data);
            //Prove Beers are here
            console.log('Punk.js Beers' , this.data)
        })
        .catch((message) => {
            console.error(message);
        });
};

Punk.prototype.getDataBeer = function (beerName) {
    const url = (`https://api.punkapi.com/v2/beers?beer_name=${beerName}`);
    console.log(url)
    const request = new Request(url);
    request.get()
        .then((data) => {
            this.data = data;
            //publish beers to result_view
            PubSub.publish('Punk:beers-obtained', this.data);
            //Prove Beers are here
            console.log('Punk.js Beers' , this.data)
        })
        .catch((message) => {
            console.error(message);
        });
};

module.exports = Punk;
