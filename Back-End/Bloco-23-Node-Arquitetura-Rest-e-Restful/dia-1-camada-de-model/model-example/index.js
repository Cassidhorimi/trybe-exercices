const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAllAuthors();

  if (!authors) return res.status(500).json({ message: 'Internal Server Error' });

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Invalid Data' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Success' });
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id) ? await Book.getBookById(author_id) : await Book.getAllBooks();

  if (!books) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  
  if(!Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Invalid Data' });
  }

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Success' });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
