//Para testar alguma linha de codigo descomente ela!
//1.
/*
const a = 5;
const b = 3;
const c = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
*/
//2.

/* 
const a = 5;
const b = 3;
const c = 5;

if ( a > b ) {
  console.log(a); 
}
else {
  console.log(b);
} */

//3.
/*
const a = 5;
const b = 3;
const c = 5;
if ( a > b && a > c) {
  console.log(a);
} else if ( a < b && b > c ) {
  console.log(b);
}
else {
  console.log(c);
} 
*/
//4.
/*
const a = 5;
const b = 3;
const c = 5;
if ( a > 0) {
  console.log("positive");
} else if ( a < 0) {
  console.log("negative");
}
else {
  console.log("zero")
} 
*/
//5.

/* const ta = 50;
const tb = 100;
const tc = 30;

if ( ta > 0 && tb > 0 && tc > 0 && ta + tb + tc === 180) {
  console.log(true);
} else if (ta > 0 && tb > 0 && tc > 0 && ta + tb + tc != 180 ) {
  console.log(false);
}
else {
  console.log("error");
} */

//6.

/* let chess = "Rook";

switch (chess.toLowerCase()) {
  case "pawn":
    console.log("1 casa para frente ou 2 casa para frente se for o primeiro movimento");
    break;
  case "knight":
    console.log("2 casas para frente e 1 para o lado em formato de L");
    break;
  case "bishop":
    console.log("Diagonais");
    break;
  case "rook":
    console.log("Vertical e horizontal");
    break;
  case "queen":
    console.log("Todas as direcoes");
    break;
  case "king":
    console.log("Todas as direcoes mas apenas 1 casa");
    break;
  default:
    console.log("error");
    break;
} */

//7.

/* let nota = 100;

if (nota >= 90 && nota <= 100) {
  let nota = "A";
  console.log(nota);
} else if (nota >= 80 && nota < 90) {
  let nota = "B";
  console.log(nota);
} else if (nota >= 70 && nota < 80) {
  let nota = "C";
  console.log(nota);
} else if (nota >= 60 && nota < 70) {
  let nota = "D";
  console.log(nota);
} else if (nota >= 50 && nota < 60) {
  let nota = "E";
  console.log(nota);
} else if (nota < 0 || nota > 100) {
  console.log("error")
} 
else {
  let nota = "F";
  console.log(nota);
}*/

//8.
/*
const x = 2;
const y = 3;
const z = 9;

if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
  console.log(true);
}
else {
  console.log(false);
}
*/
//9.
/*
const x = 7;
const y = 4;
const z = 6;

if (x % 2 === 1 || y % 2 === 1 || z % 2 === 1) {
  console.log(true);
}
else {
  console.log(false);
}
*/
//10.
/*
const custo = 50;
const venda = 100;
let custoTotal = custo + (custo * 0.2);

if (custo > 0 && venda > 0) {
  console.log( ((venda - custoTotal) * 1000) );
}
else {
  console.log("error");
}
*/
//11.
/*
let salario = 7000;
let salarioBase = 0;
let inss = 0;
if (salario > 0 && salario <= 1556.94) {
  inss = salario * 0.08;
  salarioBase = salario - inss;
} else if (salario > 1556.94 && salario <= 2594.92) {
  inss = salario * 0.09;
  salarioBase = salario - inss;
} else if (salario > 2594.92 && salario <= 5182.82) {
  inss = salario * 0.11;
  salarioBase = salario - inss;
} else if (salario > 5182.82) {
  inss = 570.88;
  salarioBase = salario - inss;
} else if (salario < 0) {
  console.log("error")
}
else {
  console.log("Ensira o seu salario");
}
if (salarioBase <= 1903.98) {
  salario = salarioBase - 0;
  console.log(salario)
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  salario = (salarioBase - ((salarioBase * 0.075) - 142.80));
  console.log(salario);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  salario = (salarioBase - ((salarioBase * 0.15) - 354.80));
  console.log(salario);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  salario = (salarioBase - ((salarioBase * 0.225) - 636.13));
  console.log(salario);
} else if (salarioBase > 4664.68) {
  salario = (salarioBase - ((salarioBase * 0.275) - 869.36));
  console.log(salario);
}
else {
  console.log();
}
*/