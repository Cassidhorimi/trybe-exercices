//1.
/*
let n = 14;
let ast = '';

if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    for (let x = 0; x < n; x += 1) {
      ast += '*';
    }
    console.log(ast);
    ast = '';
  }
}
else {
  console.log('Error');
}
*/
//2.
/*
let n = 7;
let ast = '';

for(let i = 0 ; i < n ; i += 1){
  if(n > 1){
    ast += '*';
  }
  console.log(ast);
}
*/
//3.
/*
let n = 7;
let ast = '';
let esp = n - 1;

if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    for (let x = 0; x < n; x += 1) {
      if (esp > x) {
        ast += ' ';
      }
      else {
        ast += '*';
      }
    }
    console.log(ast);
    ast = '';
    esp -= 1;
  }
}
*/
//4.
/*
let n = 5;
let ast = '';
let x = (n + 1) / 2;
let y = x - 1;
let z = x - 1;

if (n > 1) {
  for (let i = 0; i <= x; i += 1) {
    for (let a = 0; a <= n; a++) {
      if (a > y && a < z) {
        ast += '*';
      } else {
        ast += ' ';
      }
    }
    console.log(ast);
    ast = '';
    y -= 1;
    z += 1;
  }
}
else {
  console.log('Error');
}*/