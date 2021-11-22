const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  // escreva seu código aqui
  return arr.reduce((result, number) => result.concat(number), []);
}
console.log(flatten(arrays));