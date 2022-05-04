const Author = require('../services/Authors');

const getAll = async (req, res) => {
  try {
    const authors = await Author.getAll();  

    return res.status(200).json(authors);
    
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);

    return res.status(200).json(author);  
  } catch (error) {
    return res.status(404).json({ message: 'Not Found' });
  }
}

const create = async (req, res, next) => {
  try {
    const { first_name, middle_name, last_name } = req.body;
    const author = await Author.create(first_name, middle_name, last_name);

    if(!author) next(e);

    return res.status(201).json(author);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid Data' });
  }
}

module.exports = {
  getAll,
  findById,
  create,
}