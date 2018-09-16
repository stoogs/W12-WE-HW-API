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
    this.resultContainer.innerHTML = '';
    //console.log(this.resultContainer);
    beers.forEach(beer => {
        //console.log(beer.name);
        let titleHeading = document.createElement('h1');
        let headline = `${beer.name} is ${beer.abv} %abv`;
        titleHeading.textContent = headline;
        this.resultContainer.appendChild(titleHeading);
        const img = document.createElement('img');
        //check image url is ok
        console.log(beer.image_url);
        img.src = beer.image_url;
        this.resultContainer.appendChild(img)
        //console.log(beers[4]['name'])
    })
    }

module.exports = ResultView;