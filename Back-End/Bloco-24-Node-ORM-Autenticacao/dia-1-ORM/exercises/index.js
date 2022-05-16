const express = require('express');
const app = express();
const books = require('./controllers/BooksControllers');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', books);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));