const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;
  const firstOfSpecies = employees.find((element) => element.id === id).responsibleFor[0];
  // console.log('firstOfSpecies', firstOfSpecies);
  const findSpecies = species.find((elem) => elem.id === firstOfSpecies).residents;
  // console.log('findSpecies', findSpecies);
  const oldest = findSpecies.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      // console.log('curr', curr);
      return curr;
    }
    return acc;
  });
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
