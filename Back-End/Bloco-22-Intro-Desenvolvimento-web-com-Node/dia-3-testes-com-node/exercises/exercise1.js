function numberTest(x) {
  if (x > 0) return 'positivo'
  if (x < 0) return 'negativo'
  if (x === 0) return 'neutro'
  if (x !== Number) return 'o valor deve ser um número'
}

console.log(numberTest('a'));

module.exports = numberTest;
