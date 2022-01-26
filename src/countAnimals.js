const data = require('../data/zoo_data');

const { species } = data;

const cb = (acc, curr) => {
  let count = acc;
  if (curr.sex === 'female') {
    count += 1;
    return count;
  }
  return count;
};

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
  if (Object.keys(animal).length === 2) {
    const findAnimal = species.find(({ name }) => name === animal.specie);
    const { residents } = findAnimal;
    return residents.reduce(cb, 0);
  }
}

module.exports = countAnimals;
