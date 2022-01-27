const data = require('../data/zoo_data');

const { species, employees } = data;

const findEmployee = (obj) => {
  const empl = Object.values(obj)[0];
  const emp = employees.find((e) => (e.firstName === empl || e.lastName === empl || e.id === empl));
  if (emp === undefined) throw new Error('Informações inválidas');
  const idAnimals = emp.responsibleFor;
  const animals = [];
  const local = [];
  idAnimals.forEach((idAnimal) => species.find((specie) => {
    if (idAnimal === specie.id) {
      animals.push(specie.name);
      local.push(specie.location);
    }
  }));
  return { id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: [...animals],
    locations: [...local] };
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    const listEmployees = [];
    employees.forEach((employee) => {
      listEmployees.push(findEmployee(employee));
    });
    return listEmployees;
  }
  return findEmployee(obj);
}

module.exports = getEmployeesCoverage;
