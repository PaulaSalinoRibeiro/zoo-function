const data = require('../data/zoo_data');

const { species } = data;

const regions = ['NE', 'NW', 'SE', 'SW'];

const specieByRegion = () => {
  const arrayAnimal = regions.reduce((acc, region) => {
    const animals = species.filter((specie) => (specie.location === region));
    acc[region] = animals.map((animal) => animal.name);
    return acc;
  }, {});
  return arrayAnimal;
};


function getAnimalMap(options) {
  // inputs
  // includesName = true
  // includesName = true && sort = true
  // includesName = true && sex = female/macho
  // includesName = true && sex = female/macho && sort = true

  return specieByRegion();
}

module.exports = getAnimalMap;
