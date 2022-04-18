const fs = require('fs');

function writeText(arq, text) {
  fs.writeFileSync(`${__dirname}/${arq}`, text);
  return 'ok';
}

module.exports = writeText;
