const connection = require('./connection');

const serialize = (bookData) => ({
  authorId: bookData.author_id,
  title: bookData.title,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;'
  );

  return books.map(serialize);
}

const FindById = async (id) => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books WHERE author_id=?;'
  , [id]);

  if (books.length === 0) return null;

  return books.map(serialize)[0];
}

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

module.exports = {
  getAll,
  FindById,
  create,
};
