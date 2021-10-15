/*
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
*/
let athlete = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}
console.log('A jogadora ' + athlete.name + ' ' + athlete.lastName + ' tem ' + athlete.age + ' anos de idade.');

athlete['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(athlete);