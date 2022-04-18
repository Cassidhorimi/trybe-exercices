const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const writeText = require('../exercises/exercise2');

describe('testes dos exercicios 4 e 5', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('se é uma string', () => {

    const res = writeText('arquivo.txt', 'qualquer coisa lasanha');

    expect(res).to.be.a('string');
  });

  it('se foi possivel escrever o arquivo', () => {
    const res = writeText('arquivo.txt', 'qualquer coisa lasanha');

    expect(res).to.be.equals('ok');
  });
});
