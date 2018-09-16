const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(resultContainer) {
    this.resultContainer = resultContainer;
};

ResultView.prototype.bindEvents = function () {
    console.log("Result view bindEvents Function");
    PubSub.subscribe('Punk:beers-obtained', (event) => {
        console.log(event);
        const beers = event.detail;
        console.log("beers are here the beers are here");
        console.log(beers)
        this.render(beers);
    })
};

ResultView.prototype.render = function (beers) {
    //console.log(this.resultContainer);
    beers.forEach(beer => {
        //console.log(beer.name);
        let titleHeading = document.createElement('h1');s
        titleHeading.textContent = beer.name;
        this.resultContainer.appendChild(titleHeading);
        //console.log(beers[4]['name'])
    })
    }

module.exports = ResultView;