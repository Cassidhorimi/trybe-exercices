const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  return arr.reduce((a, b) => a + b.split('').reduce((result, number) => {
    if (number === 'a' || number === 'A') return result +1;
    return result;
  }, 0), 0);
}
console.log(containsA(names));