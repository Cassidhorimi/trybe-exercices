const { expect } = require('chai');

const numberTest = require('../exercises/exercise1');

describe('Testes do exercicios 1 ao 3', () => {
  it('verifica se o número é positivo', () => {
    const res = numberTest(2);

    expect(res).to.be.equals('positivo');
  });
  it('verifica se o número é negativo', () => {
    const res = numberTest(-2);

    expect(res).to.be.equals('negativo');
  });
  it('verifica se o número é neutro', () => {
    const res = numberTest(0);

    expect(res).to.be.equals('neutro');
  });
  it('verifica quando a entrada não é do tipo Number', () => {
    const res = numberTest('a')

    expect(res).to.be.equals('o valor deve ser um número');
  });
});
