const connection = require('./connection');
const Author = require('./Author');

const serialize = (bookData) => ({
  authorId: bookData.author_id,
  title: bookData.title,
});

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;'
  );

  return books.map(serialize);
}

const getBookById = async (id) => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books WHERE author_id=?;'
  , [id]);

  if (books.length === 0) return null;

  return books.map(serialize)[0];
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
}

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

module.exports = {
  getAllBooks,
  getBookById,
  isValid,
  create,
};
