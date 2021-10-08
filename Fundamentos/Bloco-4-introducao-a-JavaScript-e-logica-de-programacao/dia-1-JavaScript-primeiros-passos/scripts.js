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