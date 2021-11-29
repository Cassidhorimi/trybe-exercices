// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./exercises6");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
    function callback(error, result) {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    }

    getPokemonDetails('Ninetales', callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }
    getPokemonDetails('Charmander', callback);
  });

});