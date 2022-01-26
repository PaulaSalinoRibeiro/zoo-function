const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    const findAnimal = species.find(({ name }) => name === animal.specie);
    return findAnimal.residents.length;
  }
}
console.log(countAnimals({ specie: 'penguins' }));

// with parameter contain sex --> qta
module.exports = countAnimals;
