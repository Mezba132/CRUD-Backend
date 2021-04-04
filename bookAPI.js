const Book = require('./books');

exports.createBook = (req, res) => {

    let title = req.body.title;
    let author = req.body.author;
    let year = req.body.year;

    let book = new Book({ title, author, year });

    book.save((err, result) => {
        if(err) {
            return res.status(400).json({
                msg : 'Product not created properly'
            })
        }
        res.json(result);
    })
}

exports.read = (req, res) => {
    Book.find((err, result) => {
        if(err) {
            return res.status(400).json({
                msg : "error in showing book from db"
            })
        }
        res.json(result);
    })
}

exports.findByBookId = (req, res,next, id) => {
   Book.findById(id).exec((err, book) => {
     if(err || !book) {
        return res.status(400).json({
            msg : "product not found"
        });
     }
       req.book = book;
       next();
   })
}

exports.booklist = (req, res) => {
  return res.json(req.book);
}

exports.postEditProduct = (req, res, next) => {

    let { title, author, year } = req.body;

    let book = new Book({ title: title, author: author, year: year});

    book.save((err, result) => {
        if(err) {
            return res.status(400).json({
                msg : 'Product not update properly'
            })
        }
        res.json(result);
    })    
}

