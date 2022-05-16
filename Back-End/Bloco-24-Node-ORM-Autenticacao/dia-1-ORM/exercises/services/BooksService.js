const { books } = require('../models');

const getAll = async (_req, res) => {
  try{
    const booksList = await books.findAll();

    return res.status(200).json(booksList);
  } catch (e) {
    console.log(e.message);

    res.status(500).json({ message: 'Internal Server Error' });
  };
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await books.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await books.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await books.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    if(!updateBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await books.destroy(
      { where: { id } },
    );

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteBook,
};
