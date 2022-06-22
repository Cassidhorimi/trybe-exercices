interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('Log2: ', param);
  }
}

interface DataBase {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDataBase implements DataBase {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${ value } na chave ${ key }`);
  }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const data1 = new ExampleDataBase(log1);
const data2 = new ExampleDataBase(log2);
const data3 = new ExampleDataBase();

data1.save('key1', 'value1');
data2.save('key2', 'value2');
data3.save('key3', 'value3');
