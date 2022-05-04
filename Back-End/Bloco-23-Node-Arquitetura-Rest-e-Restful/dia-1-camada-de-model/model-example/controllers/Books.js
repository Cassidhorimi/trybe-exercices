const Book = require('../services/Books');

const getAllOrFindById = async (req, res, next) => {
  try {
    const { author_id } = req.query;
    const books = (author_id) ? await Book.findById(author_id) : await Book.getAll();
    if (!books) next(e)
    return  res.status(200).json(books);
  } 
  catch (error) {
    return res.status(404).json({ message: 'Not Found' });
  }
}

const create = async (req, res, next) => {
  try {
    const { title, author_id } = req.body;
    const book = await Book.create(title, author_id);
    
    if(!book) next(e);

    return res.status(201).json(book);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid Data' });
  }
}

module.exports = {
  getAllOrFindById,
  create
}