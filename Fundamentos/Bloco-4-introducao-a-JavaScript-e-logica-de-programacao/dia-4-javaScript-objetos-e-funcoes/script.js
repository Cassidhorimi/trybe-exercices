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