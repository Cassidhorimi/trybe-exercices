const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const x = (z) => {
  const skill = Object.keys(z);
  const nivel = Object.values(z);
  for ( i in skill){
    console.log(`Skill: ${skill[i]}, Nivel:${nivel[i]}`);
  }
}

x(student1);
console.log('------------------------------')
x(student2);