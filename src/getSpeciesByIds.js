const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const { species } = data;
  if (ids.length > 1) return species.filter((e, index) => e.id === ids[index]);
  return species.filter((e) => e.id === ids[0]);
}

module.exports = getSpeciesByIds;
