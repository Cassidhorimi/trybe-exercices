//Objetos e for/in
//1.
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
console.log('Bem-vinda, ' + info.personagem);
*/
//2.
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
info['recorrente'] = 'sim';
console.log(info);
*/
//3.
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
}

for(key in info){
  console.log(key);
}
*/
//4.
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
}

for(key in info){
  console.log(info[key]);
}
*/
//5.
/*
let infoMargarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
}
let infoTioPatinhas = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}
for(key in infoMargarida && infoTioPatinhas){
  if ( key === 'recorrente' && infoMargarida[key] === 'Sim' && infoTioPatinhas[key] === 'Sim' ){
    console.log('ambos recorrentes');
  } else {
    console.log(infoMargarida[key] + ' e ' + infoTioPatinhas[key]);
  }
}
*/
//Functions
//1.
/*
function p(string){
  let str = string.split('').reverse('').join('');
  if (str === string){
    return true;
  } else {
    return false;
  }
}
console.log(p('arara'));
console.log(p('desenvolvimento'));
*/
//2.
/*
let x = [2, 3, 6, 7, 10, 1];
function y(z) {
  let b = 0;
  for (a in z) {
    if (z[b] < z[a]) {
      b = a
    }
  }
  return b;
}
console.log(y(x));
*/
//3.
/*
let x = [2, 4, 6, 7, 10, 0, -3];
function y(z) {
  let b = 0;
  for (a in z) {
    if (z[b] > z[a]) {
      b = a
    }
  }
  return b;
}
console.log(y(x));
*/
//4.
/*
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(x) {
  let nome = x[0];
  for (i in x) {
    if (x.length < x[i].length) {
      nome = x[i];
    }
  }
  return nome;
}
console.log(maiorNome(names));
*/
//5.
/*
let numbers = [2, 3, 2, 5, 8, 2, 3];

function repeat(x) {
  let repeatTimes = 0;
  let numberRepeat = 0;
  let numberIndex = 0;
  for (number in x) {
    let verify = x[number];
    for (i in x) {
      if (verify === x[i]) {
        repeatTimes += 1;
      }
    }
    if (numberRepeat > repeatTimes) {
      repeatTimes = numberRepeat;
      numberIndex = number;
    }
    numberRepeat = 0
  }
  return x[numberIndex]
}
console.log(repeat(numbers));
*/
//6.
/*
let n = 5;

function sum(x){
  let resultado = 0;
  for(i = 0; i <= x; i++){
    resultado = i + resultado;
  }
  return resultado;
}
console.log(sum(5));
*/
//7.
/*
function word(x, y) {
  let str1 = x.split('').reverse().join('');
  let str2 = y.split('').reverse().join('');
  let result;

  for (i = 0; i < str2.length; i += 1) {
    if (str1[i] !== str2[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  
  return result;
}
console.log(word('trybe', 'be'));
*/