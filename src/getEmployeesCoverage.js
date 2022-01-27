const data = require('../data/zoo_data');

const { species, employees } = data;

const findEmployee = (obj) => {
  const idAnimals = obj.responsibleFor;
  const arrAnimals = [];
  const arrLocal = [];
  idAnimals.forEach((idAnimal) => {
    species.forEach((specie) => {
      if (idAnimal === specie.id) {
        arrAnimals.push(specie.name);
        arrLocal.push(specie.location);
      }
    });
  });
  return { id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: [...arrAnimals],
    locations: [...arrLocal] };
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    const listEmployees = [];
    employees.forEach((employee) => {
      listEmployees.push(findEmployee(employee));
    });
    return listEmployees;
  }
  const empl = Object.values(obj)[0];
  const emp = employees.find((e) => (e.firstName === empl || e.lastName === empl || e.id === empl));
  if (emp === undefined) throw new Error('Informações inválidas');
  return findEmployee(emp);
}

module.exports = getEmployeesCoverage;
