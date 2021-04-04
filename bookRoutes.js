const express = require('express');
const router = express.Router();

const { createBook, read, findByBookId, booklist, postEditProduct } = require('./bookAPI');

router.post('/create', createBook);
router.get('/read', read);
router.get('/read/:bookId', booklist)
router.put('/edit/:bookId', postEditProduct);

router.param('bookId', findByBookId)

module.exports = router;
