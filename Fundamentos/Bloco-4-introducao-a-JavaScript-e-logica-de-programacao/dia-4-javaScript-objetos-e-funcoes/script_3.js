//Para testar alguma linha de codigo descomente ela!
//1.
/*
function sum(oper, a, b) {
  switch (oper) {
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    case '*':
      return a * b;
      break;
    case '/':
      return a / b;
      break;
    case '%':
      return a % b;
      break;
    default:
      return 'error';
      break;
  }
}
console.log(sum('+', 48, 6));
*/
//2.
/*
function x(a, b){
  if ( a > b ) {
    return a;
  }
  else {
    return b;
  }
}
console.log(x(5, 7));
*/
//3.
/*
function bigger(a, b, c){
  if ( a > b && a > c) {
    return a;
  } else if ( a < b && b > c ) {
    return b;
  }
  else {
    return c;
  }
}
console.log(bigger(5, 3, 7));
*/
//4.
/*
function x(a){
  if ( a > 0) {
    return 'positive';
  } else if ( a < 0) {
    return 'negative';
  }
  else {
    return 'zero';
  }
}
console.log(x(0));
*/
//5.
/*
function tr(ta, tb, tc) {
  if (ta > 0 && tb > 0 && tc > 0 && ta + tb + tc === 180) {
    return true;
  } else if (ta > 0 && tb > 0 && tc > 0 && ta + tb + tc != 180) {
    return false;
  }
  else {
    return 'error';
  }
}
console.log(tr(50, 30, 100));
*/
//6.
/*
function move(chess) {
  switch (chess.toLowerCase()) {
    case "pawn":
      return '1 casa para frente ou 2 casa para frente se for o primeiro movimento';
      break;
    case "knight":
      return '2 casas para frente e 1 para o lado em formato de L';
      break;
    case "bishop":
      return 'Diagonais';
      break;
    case "rook":
      return 'Vertical e horizontal';
      break;
    case "queen":
      return 'Todas as direcoes';
      break;
    case "king":
      return 'Todas as direcoes mas apenas 1 casa';
      break;
    default:
      return 'error';
      break;
  }
}
console.log(move('Queen'));
*/
//7.
/*
function nota(numb){
  if (numb >= 90 && numb <= 100) {
    return 'A';
  } else if (numb >= 80 && numb < 90) {
    return 'B';
  } else if (numb >= 70 && numb < 80) {
    return 'C';
  } else if (numb >= 60 && numb < 70) {
    return 'D';
  } else if (numb >= 50 && numb < 60) {
    return 'E';
  } else if (numb < 0 || numb > 100) {
    return 'error';
  }
  else {
    return 'F';
  }
}
console.log(nota(100));
*/
//8.
/*
function even(a, b, c) {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(even(5, 3, 2));
*/
//9.
/*
function odd(x, y, z) {
  if (x % 2 === 1 || y % 2 === 1 || z % 2 === 1) {
    return true;
  }
  else {
    return false;
  }
}
console.log(odd(2, 4, 3));
*/
//10.
/*
function cost(x, z) {
  if (x > 0 && z > 0) {
    return ((z - (x + (x * 0.2))) * 1000);
  }
  else {
    return 'error';
  }
}
console.log(cost(50, 100));
*/
//11.
/*
let z = 0;
function salario(x) {
  if (x > 0 && x <= 1556.94) {
    return z = x - (x * 0.08);
  } else if (x > 1556.94 && x <= 2594.92) {
    return z = x - (x * 0.09);
  } else if (x > 2594.92 && x <= 5182.82) {
    return z = x - (x * 0.11);
  } else if (x > 5182.82) {
    return z = x - 570.88;
  } else if (x < 0) {
    return 'error';
  }
  else {
  }
}
function ir (a){
  if (a <= 1903.98) {
    return z = a -0;
   } else if (a > 1903.98 && a <= 2826.65) {
     return z = (z - ((a * 0.075) - 142.80));
   } else if (a > 2826.65 && a <= 3751.05) {
     return z = (z - ((a * 0.15) - 354.80));
   } else if (a > 3751.05 && a <= 4664.68) {
     return z = (z - ((a * 0.225) - 636.13));
   } else if (a > 4664.68) {
     return z = (z - ((a * 0.275) - 869.36));
   }
   else {
   }
}
salario(3000);
console.log(ir(z));
*/