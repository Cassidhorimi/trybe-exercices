const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const  add = (lesson, turn, period) => {
  lesson[turn] = period;
}

add(lesson2, 'turno', 'noite');

console.log(lesson2);

const list = obj => Object.keys(obj);
console.log(list(lesson2));

const tamanho = obj => Object.keys(obj).length;
console.log(tamanho(lesson2));

const value = obj => Object.values(obj);
console.log(value(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const count = (obj) => {
  let number = 0;
  const x = Object.keys(obj);
  for (i in x) {
    number += obj[x[i]].numeroEstudantes;
  }
  return number;
}
console.log(count(allLessons));

const index = (obj, number) => {
  const array = Object.values(obj);
  return array[number];
}
console.log(index(lesson1, 0));

const verify = (obj, key, value) => {
  const array = Object.entries(obj);
  let trueOrFalse = false;
  for (i in array){
    if (array[i][0] === key && array[i][1] === value) trueOrFalse = true;
  }
  return trueOrFalse;
}

console.log(verify(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verify(lesson3, 'materia', 'Maria Clara'));
// Output: false