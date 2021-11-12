function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join('');
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

function techList(array, name) {
  let sortArray = array.sort();
  let tech = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    tech.push({
      tech: sortArray[i],
      name: name
    });
  }
  return tech;
}

function hydrate(string) {
  const reg = /\d+/g;
  const result = string.match(reg);
  let int = 0;
  let count = 0;
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] > 0) {
      int = parseInt(result[i]);
      count += int;
    }
  }
  if (count === 1) {
    return `${count} copo de água`;
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate };
