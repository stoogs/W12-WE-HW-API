const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {
    this.data = [];

}

ResultView.prototype.bindEvents = function () {
    PubSub.subscribe('Punk:beers-obtained', (event) => {

    })
}


module.exports = ResultView;