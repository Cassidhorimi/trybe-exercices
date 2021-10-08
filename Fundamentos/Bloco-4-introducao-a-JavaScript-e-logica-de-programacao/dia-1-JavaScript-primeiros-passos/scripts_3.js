const currentHour = 15;
let message = "";

if (currentHour >= 22 && currentHour <= 24) {
  let message = " Nao deveriamos comer nada, eh hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
  let message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
  let message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
  let message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11 ){
  let message = "Hmmm, cheiro de café recém passado";
}
else if ( currentHour >= 0 && currentHour < 4) {
  let message = "Voce ja deveria estar dormindo";
}
else {
  let message = "Horario invalido";
}
console.log(message);