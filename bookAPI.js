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

exports.postEditBook = (req, res, next) => {

    let id = req.book._id;

    Book.findById(id)
        .then(book => {
          book.title = req.body.title;
          book.author = req.body.author;
          book.year = req.body.year;
          return book.save();
        })
        .then(result => {
          res.json(result);
        })
        .catch(err => {
              return res.status(400).json({
                  msg : 'Product not update properly'
              })
        })
}

exports.deleteBook = (req, res, next) => {
  const bId = req.book;
  Book.deleteOne()
      .then(() => {
        res.json({
             msg:"Book Deleted successfully"
          })
      })
      .catch(() => {
          return res.status(400).json({
              msg : 'Book is not deleted properly'
          })
      })
}
