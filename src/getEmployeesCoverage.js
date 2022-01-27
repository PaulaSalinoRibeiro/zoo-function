const data = require('../data/zoo_data');

// const idAnimals = findEmployee(obj).responsibleFor;
// console.log(idAnimals);

/* idAnimals.forEach((e) => {
  species.find((specie) => {
  if (e === specie.id) {
  animals.push(specie.name);
  local.push(specie.location); 
*/


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

//console.log(findEmployee({ name: 'Sharonda' }));

function getEmployeesCoverage(obj) {
  if (Object.keys(obj).length === 0) {
    return 'list of all employees'; // --> array all employees;
  }
  return findEmployee(obj); // --> filter employees;
}

//console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
