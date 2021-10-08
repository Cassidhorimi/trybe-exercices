let estado = "aprovada";

switch (estado) {
  case "aprovada":
    console.log("Parabens, voce foi aprovada(o)");
    break;
  case "lista":
    console.log("Calma, voce ainda tem chance");
    break;
  case "reprovada":
    console.log("Desculpe, voce foi reprovada(o)");
    break;
  default:
    console.log("Nao se aplica")
}
