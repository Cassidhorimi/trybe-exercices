//1.
/*
let text = document.getElementById('bio')
function alteraTexto(p){
  p.innerHTML = 'Trabalhando em uma empresa de <strong>TI </strong>'
}
alteraTexto(text);
*/
//2.
/*
let cor = document.getElementsByClassName('main-content');
function mudacor(a) {
  a[0].style.backgroundColor = 'rgb(76,164,109)';
}
mudacor(cor)
*/
//3.
/*
let cor = document.getElementsByTagName('section');

function mudacor(x){
  x[0].style.backgroundColor = 'white';
}
mudacor(cor)
*/
//4.
/*
let text = document.getElementsByClassName('title');

function corrigeTexto(x){ 
  x[0].innerText = 'Exercício 5.1 - JavaScript'
}
corrigeTexto(text);
*/
//5.
/*
let text = document.getElementsByTagName ('p');
function upperCase(x){
  for (i in x){
  x[i].innerText = x[i].innerText.toUpperCase();
  }
}
upperCase(text);
*/
//6.
/*
let text = document.getElementsByTagName ('p');
function upperCase(x){
  for (i in x){
  console.log(document.getElementsByTagName ('p')[i]);
  }
}
upperCase(text);
*/