const fs = require('fs/promises');

function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(res => JSON.parse(res));
}

function setSimpsons (newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
}

module.exports = { getSimpsons, setSimpsons };
