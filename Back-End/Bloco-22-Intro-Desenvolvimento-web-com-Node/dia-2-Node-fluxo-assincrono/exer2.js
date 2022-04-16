const fs = require('fs').promises;
const nomeDoArquivo = 'simpsons.json';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((json) => {
    return JSON.parse(json)
  })
  .then((data) => {
    return data.map(({ id, name }) => console.log(`${id} - ${name}`));
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${ nomeDoArquivo }\n ${ err }`)
    process.exit(1);
  })