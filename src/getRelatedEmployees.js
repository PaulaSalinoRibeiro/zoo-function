const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  return managers.some((ele) => ele === id);
}

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId) === false) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
  } catch (error) {
    throw error.message;
  }
  const { employees } = data;
  return employees.reduce((acc, curr) => {
    if (curr.managers.includes(managerId)) {
      console.log(curr.managers.includes(managerId));
      acc.push(`${curr.firstName} ${curr.lastName}`);
    }
    console.log(acc);
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
