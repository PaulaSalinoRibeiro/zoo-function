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

const animalNameByRegion = () => {
  // return
};

function getAnimalMap(options) {
  const { includesName, sex, sorted } = options;
  if (includesName === true) {
    return animalNameByRegion({ sex, sorted });
  }

  return specieByRegion();
}

module.exports = getAnimalMap;
