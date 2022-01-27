const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;
  const firstOfSpecies = employees.find((element) => element.id === id).responsibleFor[0];
  const findSpecies = species.find((elem) => elem.id === firstOfSpecies).residents;
  const oldest = findSpecies.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      return curr;
    }
    return acc;
  });
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
