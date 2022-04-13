const readline = require('readline-sync');

const name = readline.question('Qual o seu nome? ');
const age = readline.questionInt('Qual a sua idade? ');
const altura = readline.questionInt('Qual a sua altura em cm? ');
const peso = readline.questionInt('Qual o seu peso? ');

const imc = peso / ( altura * 2);

console.log(`${name} Seu IMC é ${imc.toFixed(2)}`);