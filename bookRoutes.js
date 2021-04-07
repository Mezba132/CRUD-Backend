const express = require('express');
const router = express.Router();

const { createBook, booklist, findByBookId, bookById, postEditBook, deleteBook } = require('./bookAPI');

router.post('/create', createBook);
router.get('/read', booklist);
router.get('/read/:bookId', bookById);
router.put('/edit/:bookId', postEditBook);
router.delete('/delete/:bookId', deleteBook);

router.param('bookId', findByBookId);

module.exports = router;
