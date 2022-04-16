function math(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
      reject(new Error('Informe apenas números'))

    const result = (num1 + num2) * num3;

    if (result < 50) reject(new Error('Valor muito baixo'))

    resolve(result);
  });
  return promise;
}

math(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log('erro: %s', error.message))

math(10, 10, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log('erro: %s', error.message));

math(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log('erro: %s', error.message));

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function arrayRandomNumber () {
  return Array.from({ length: 3 }).map(getRandomNumber);
}

async function arrayNumber () {
  const arr = Array.from({ length: 3 }).map(getRandomNumber);
  
  try {
    const result = await math(...arr);
    console.log(result);
  } catch (erro) {
    console.log('erro: %s', erro.message);
  }
}

math(...arrayRandomNumber())
  .then(resolve => console.log(resolve))
  .catch(error => console.log('erro: %s', error.message));

arrayNumber();