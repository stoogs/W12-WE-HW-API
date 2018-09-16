const PubSub = require('../helpers/pub_sub.js');

const MinAbvForm = function (element) {
    this.element = element;
}

MinAbvForm.prototype.bindEventsABV = function () {
    this.element.addEventListener('submit', (event) => {
        event.preventDefault();
        const minAbvNumber = event.target['min-abv-input'].value;
        console.log(minAbvNumber);
        PubSub.publish('MinAbvForm:abv-value', minAbvNumber);
        this.element.reset();
    });
    }

module.exports = MinAbvForm;