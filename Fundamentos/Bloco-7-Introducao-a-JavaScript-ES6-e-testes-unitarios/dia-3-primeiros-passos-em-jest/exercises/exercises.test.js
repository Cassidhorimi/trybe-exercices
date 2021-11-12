const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./exercises');

describe("Requisito 1 - Soma", () => {
  it('Verifica se retorna a soma correta', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toBe(0);
  });

  it('Verifica se retorna erro quando passado string como parametro', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});

describe('Requsito 2 - Remove', () => {
  it('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se nao retorna o array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Requisito 3 - FizzBuzz', () => {
  it('Verifica se um numero divisivel por 3 e 5 retorna o resultado esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se um numero divisivel por 3 retorna o resultado esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifica se um numero divisivel por 5 retorna o resultado esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Verifica se um numero nao divisivel por 3 e 5 retorna o resultado esperado', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });

  it('Verifica se passado um NaN retorna o esperado', () => {
    expect(myFizzBuzz('8')).toBe(false);
  });
});

describe('Requisito 4 - encode decode', () => {
  it('Se encode e decode sao funcoes', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });

  it('Se encode e decode sao funcoes', () => {
    expect( typeof encode).toEqual('function');
    expect( typeof decode).toEqual('function');
  });

  it('Se as vogais a, e, i, o, u sao convertida em 1, 2, 3, 4, 5 respectivamente pela funcao encode', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Se os numeros 1, 2, 3, 4, 5 sao convertida em a, e, i, o, u respectivamente pela funcao decode', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Se as demais letras nao sao convertida em numeros', () => {
    expect(encode('cssd123')).toBe('cssd123');
  });

  it('Verifica se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('Cassid').length).toEqual(6);;
  });
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});