const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const findAnimal = species.filter(({ name }) => name === animal);
  return findAnimal[0].residents.every((e) => e.age >= age);
}

module.exports = getAnimalsOlderThan;
