const Book = require('../services/Books');

const getAllOrFindById = async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id) ? await Book.findById(author_id) : await Book.getAll();

  if (!books) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(books);
}

const create = async (req, res) => {
  const { title, author_id } = req.body;
  
  const book = await Book.create(title, author_id);


  if(!book) return res.status(400).json({ message: 'Invalid Data' });

  res.status(201).json(book);
}

module.exports = {
  getAllOrFindById,
  create
}