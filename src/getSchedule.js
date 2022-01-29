const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);
const animals = species.map((animal) => animal.name);

const getOfficeHour = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
};

const getSpecieInExhibition = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  const findSpecies = species.filter((elem) => elem.availability.includes(day));
  const arrSpecies = findSpecies.map((animal) => animal.name);
  return arrSpecies;
};

const createdSchedule = (day) => {
  const sch = { [day]: { officeHour: getOfficeHour(day), exhibition: getSpecieInExhibition(day) } };
  return sch;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    //
  }

  if (days.includes(scheduleTarget)) {
    return createdSchedule(scheduleTarget);
  }

  if (animals.includes(scheduleTarget)) {
    const animal = species.find((specie) => specie.name === scheduleTarget);
    return animal.availability;
  }
}

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
