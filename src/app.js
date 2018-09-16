const ResultView = require('./views/result_view.js');
const Punk = require('./models/punk.js');
const MinAbvForm = require('./views/min_abv_form.js');
const BeerSearchForm = require('./views/beer_search_form.js');

document.addEventListener('DOMContentLoaded', () => {

  const punkMinAbv = document.querySelector('#beer-min-abv-form');
  const minAbvForm = new MinAbvForm(punkMinAbv);
  minAbvForm.bindEventsABV();

  const searchItem = document.querySelector('#beer-search-form');
  const beerSearchForm = new BeerSearchForm(searchItem);
  beerSearchForm.bindEventsBeer();

  const beerCellar = document.querySelector('#beer-cellar');
  const resultView = new ResultView(beerCellar);
  resultView.bindEvents();

  const punkDataBeer = new Punk();
  punkDataBeer.bindEventsBeer();

  const punkDataAbv = new Punk();
  punkDataAbv.bindEventsAbv();
});
