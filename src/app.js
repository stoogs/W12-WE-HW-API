//const BeerView = require('./views/beer_view.js');
//const PunkView = require('./views/punk_view.js');
const Punk = require('./models/punk.js');

document.addEventListener('DOMContentLoaded', () => {

  const punkDOM = document.querySelector('#beer-form');
  const punkData = new Punk(punkDOM);
  punkData.getData();
});
