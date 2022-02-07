const data = require('../data/zoo_data');

const { species } = data;

const filterResidents = (residents, sex, sorted) => {
  if (sex && sorted) {
    return residents
      .filter((resid) => resid.sex === sex)
      .map(({ name }) => name)
      .sort();
  }
  if (sex) {
    return residents
      .filter((resid) => resid.sex === sex)
      .map(({ name }) => name);
  }
  if (sorted) {
    return residents.map(({ name: animalName }) => animalName).sort();
  }
  return residents.map(({ name: animalName }) => animalName);
};

const animalMap = ({ includeNames, sex, sorted }) => {
  const local = { NE: [], NW: [], SE: [], SW: [] };
  return species.reduce((acc, { name, location, residents }) => {
    if (includeNames) {
      acc[location].push({
        [name]: filterResidents(residents, sex, sorted),
      });
    } else {
      acc[location].push(name);
    }
    return acc;
  }, local);
};

function getAnimalMap(
  options = { includeNames: false, sex: false, sorted: false },
) {
  if (options !== undefined) {
    return animalMap(options);
  }
}

module.exports = getAnimalMap;
