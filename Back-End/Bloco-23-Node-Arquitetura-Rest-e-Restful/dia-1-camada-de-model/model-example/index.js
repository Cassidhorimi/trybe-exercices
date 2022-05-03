const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Authors');
const Book = require('./controllers/Books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.get('/books', Book.getAllOrFindById);

app.post('/books', Book.create);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
