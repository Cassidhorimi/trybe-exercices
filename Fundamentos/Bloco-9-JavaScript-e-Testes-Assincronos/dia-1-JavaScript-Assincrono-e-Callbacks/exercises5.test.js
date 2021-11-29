const { test } = require("@jest/globals");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando a function upperCase', (done) =>{
  uppercase('cassid horimi', (str) => {
    try {
      expect(str).toBe('CASSID HORIMI');
      done();
    }
    catch (error){
      done(error);
    }
  });
});