const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Authors');
const Book = require('./controllers/Books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.all('/');

app.route('/authors')
  .get(Author.getAll)
  .post(Author.create);

app.route('/authors/:id')
  .get(Author.findById);

app.route('/books')
  .get(Book.getAllOrFindById)
  .post(Book.create);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
