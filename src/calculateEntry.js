const data = require('../data/zoo_data');

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

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
// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  /* let senior = 0;
  let adult = 0;
  let child = 0; */
}

// age < 18 --> child
// age > 18 && age < 50 --> adult
// age > 50 --> senior

module.exports = { calculateEntry, countEntrants };
