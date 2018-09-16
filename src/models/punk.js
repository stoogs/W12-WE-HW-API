const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Punk = function () {
  this.data = null;
  this.minAbv = 0;
}



Punk.prototype.bindEvents = function() {
    PubSub.subscribe('MinAbvForm:abv-value', (event) => {
        this.abvNum = event.detail;
        //this.minAbv = (abvNum);
        console.log(this.abvNum)
        this.getData(this.abvNum);
    });
}

    Punk.prototype.getData = function (minAbv) {
        const url = (`https://api.punkapi.com/v2/beers?&abv_gt=${minAbv}`);
        console.log(url)
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
