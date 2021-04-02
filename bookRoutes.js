const express = require('express');
const router = express.Router();

const { createBook, read, findByBookId, booklist } = require('./bookAPI');

router.post('/create', createBook);
router.get('/read', read);
router.get('/read/:bookId', booklist)

router.param('bookId', findByBookId)

module.exports = router;
