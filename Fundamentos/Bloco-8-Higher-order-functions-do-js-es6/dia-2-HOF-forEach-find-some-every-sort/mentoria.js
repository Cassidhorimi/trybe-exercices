const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];

// Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
const even = (array) => {
  if (array.id % 2 === 0){
      return console.log(array.name)
  }
}
techProducts.forEach(even);


// Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário

const price = (array) => {
  return array.some((element) => element.price > 300);
}
console.log(price(techProducts));

// Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// ex: id: 8 e quantidade: 2 preço total: 432

const buy = (array, id, qtd) => {
  array.find((idFind) => {
      if (idFind.id === id) {
          return console.log(`Total: ${idFind.price * qtd}`);
      }
  })
}

buy(techProducts, 5, 3);