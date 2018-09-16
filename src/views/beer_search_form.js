const PubSub = require('../helpers/pub_sub.js');

const BeerSearchForm = function (element) {
    this.element = element;
}

BeerSearchForm.prototype.bindEventsBeer = function () {
    this.element.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchItem = event.target['beer-search-input'].value;
        console.log(searchItem);
        PubSub.publish('BeerSearchForm:beer-name', searchItem);
        this.element.reset();
    });
    }

module.exports = BeerSearchForm;