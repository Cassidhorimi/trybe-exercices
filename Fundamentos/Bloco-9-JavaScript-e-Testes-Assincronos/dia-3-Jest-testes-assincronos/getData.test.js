const { expect } = require('@jest/globals');
const getSuperHero = require('./getData');

test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
  try {
    await getSuperHero('https://www.urlalterada.com');
  } catch (error) {
    expect(error.code)
      .toBe('ENOTFOUND');
    expect(error.message)
      .toBe('request to https://www.urlalterada.com/ failed, reason: getaddrinfo ENOTFOUND www.urlalterada.com');
  }
});