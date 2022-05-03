const Author = require('./Authors');
const Book = require('../models/Books')

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
}

const getAll = async () => {
  const books = await Book.getAll();
  return books;
}

const findById = async (id) => {
  const book = await Book.FindById(id);

  if(!book) return null;

  return book;
}

const create = async (title, authorId) => {
  const validBook = isValid(title, authorId);

  if(!validBook) return false;

  const [book] = await Book.create(title, authorId);

  return ({ title, authorId });
}

module.exports = {
  getAll,
  findById,
  create,
}
