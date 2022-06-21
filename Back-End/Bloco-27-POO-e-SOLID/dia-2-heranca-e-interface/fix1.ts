class SuperClass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!')
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
 }

const myFunc = (object: SuperClass) => {
  object.sayHello();

  console.log(object.isSuper ? 'true' : 'false');
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);