const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageOfPeoples = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((elem) => {
    if (elem.age < 18) {
      ageOfPeoples.child += 1;
    } else if (elem.age >= 18 && elem.age < 50) {
      ageOfPeoples.adult += 1;
    } else {
      ageOfPeoples.senior += 1;
    }
  });
  return ageOfPeoples;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { prices } = data;
  const qtaPeople = [countEntrants(entrants)];
  return qtaPeople.reduce((acc, curr) => {
    let count = acc;
    count = curr.child * prices.child + curr.adult * prices.adult + curr.senior * prices.senior;
    return count;
  }, 0);
}

module.exports = { calculateEntry, countEntrants };
