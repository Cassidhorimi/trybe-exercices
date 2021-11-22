const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arrStudents, arrNotas) {
  const studentNote = arrStudents.map((student, note) => ({
    name: student,
    average: arrNotas[note].reduce((result, number) => result + number) / arrNotas[note].length
  }))
  return studentNote;
}

console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];