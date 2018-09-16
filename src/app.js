//const BeerView = require('./views/beer_view.js');
const ResultView = require('./views/result_view.js');
const Punk = require('./models/punk.js');
const MinAbvForm = require('./views/min_abv_form');

document.addEventListener('DOMContentLoaded', () => {
  const punkMinAbv = document.querySelector('#beer-min-abv-form');

  const minAbvForm = new MinAbvForm(punkMinAbv);
  minAbvForm.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

  const punkData = new Punk();
  punkData.bindEvents();
});
