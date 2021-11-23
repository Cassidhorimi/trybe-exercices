const sum = (...args) => args.reduce((acc, number) => acc + number, 0);
console.log(sum(1, 5, 5, 6, 1, 85, 25, 19, 30, 15));