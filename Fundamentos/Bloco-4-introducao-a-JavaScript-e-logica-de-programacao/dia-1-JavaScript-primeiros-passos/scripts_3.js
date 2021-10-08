const currentHour = 15;
var message = "";

if (currentHour >= 22 && currentHour <= 24) {
  var message = " Nao deveriamos comer nada, eh hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
  var message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
  var message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
  var message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11 ){
  var message = "Hmmm, cheiro de café recém passado";
}
else if ( currentHour >= 0 && currentHour < 4) {
  var message = "Voce ja deveria estar dormindo";
}
else {
  var message = "Horario invalido";
}
console.log(message);