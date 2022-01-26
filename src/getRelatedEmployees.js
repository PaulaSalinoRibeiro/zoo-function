const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  const macthManagers = employees.some((e) => {
    const { managers } = e;
    return managers.find((elem) => elem === id);
  });
  return macthManagers;
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
      // console.log(curr.managers.includes(managerId));
      acc.push(`${curr.firstName} ${curr.lastName}`);
    }
    // console.log(acc);
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
