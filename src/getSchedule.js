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
  if (day === undefined) {
    return days.reduce((acc, curr) => {
      acc[curr] = {
        officeHour: getOfficeHour(curr),
        exhibition: getSpecieInExhibition(curr),
      };
      return acc;
    }, {});
  }
  const sch = { [day]: { officeHour: getOfficeHour(day), exhibition: getSpecieInExhibition(day) } };
  return sch;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return createdSchedule();
  }

  if (!days.includes(scheduleTarget) && !animals.includes(scheduleTarget)) {
    return createdSchedule();
  }

  if (animals.includes(scheduleTarget)) {
    const animal = species.find((specie) => specie.name === scheduleTarget);
    return animal.availability;
  }

  return createdSchedule(scheduleTarget);
}

module.exports = getSchedule;
