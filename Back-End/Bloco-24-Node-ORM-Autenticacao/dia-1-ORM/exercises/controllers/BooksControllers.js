const express = require('express');
const books = require('../services/BooksService');

const router = express.Router();

router.get('/', books.getAll);
router.get('/:id', books.findById);

router.post('/', books.create);

router.put('/:id', books.update);

router.delete('/:id', books.deleteBook);

module.exports = router;
