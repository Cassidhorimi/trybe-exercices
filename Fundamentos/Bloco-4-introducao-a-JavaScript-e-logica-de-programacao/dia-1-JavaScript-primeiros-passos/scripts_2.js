const nota = 100;

if ( nota >= 80 && nota <= 100) {
  console.log("Parabens, voce foi aprovada(o)");
}
else if (nota < 80 &&  nota >= 60) {
  console.log("Voce esta na nossa lista de espera")
}
else if (nota > 100) {
  console.log("Nao eh uma nota valida");
}
else {
  console.log("Voce foi reprovada(o)");
}