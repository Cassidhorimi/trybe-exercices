// Ao chamar a função doingThings:

const wakeup = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (x) => {
  const y = x();
  console.log(y);
}
doingThings(wakeup);
doingThings(cafe);
doingThings(dormir);