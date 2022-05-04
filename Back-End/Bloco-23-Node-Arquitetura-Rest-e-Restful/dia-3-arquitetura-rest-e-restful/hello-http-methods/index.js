const fetch = require('node-fetch');
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json',
});

const body = JSON.stringify({
  name: 'Teste',
  email: 'teste@teste.com',
  password: 'T3ste'
})

fetch('https://postman-echo.com/post?param1=teste', { 
  headers,
  method: 'POST',
  body,
})
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    if (err.status) {
      return console.log(`Request failed with status ${err.status}`);
    }
    console.log(err);
  });