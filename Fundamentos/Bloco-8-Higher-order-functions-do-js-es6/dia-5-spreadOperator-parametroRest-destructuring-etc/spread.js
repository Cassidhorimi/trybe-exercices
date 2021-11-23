// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melancia', 'Pessego', 'Pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Maçã', 'Abacaxi'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));