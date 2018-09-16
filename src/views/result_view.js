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
        console.log(beers);
        this.render(beers);
    })
};

ResultView.prototype.render = function (beers) {
    this.resultContainer.innerHTML = '';
    //console.log(this.resultContainer);

    beers.forEach(beer => {
        //console.log(beer.name);

    let container = document.createElement('div')
        this.resultContainer.appendChild(container)

        let titleHeading = document.createElement('h1');
        let headline = `${beer.name} is ${beer.abv} %abv`;
        titleHeading.textContent = headline;
        this.resultContainer.appendChild(titleHeading);



    let tagline = document.createElement('h3');
    tagline.textContent = beer.tagline;
    this.resultContainer.appendChild(tagline)
    const img = document.createElement('img');
    img.src = beer.image_url;
    img.textContent = beer.description;
    let description = document.createElement('h5');
    description.textContent = beer.description;
    this.resultContainer.appendChild(description);
    this.resultContainer.appendChild(img)


    })
    }




module.exports = ResultView;