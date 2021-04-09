const Book = require('./books');

exports.createBook = (req, res) => {

    let {title, author, year} = req.body;

    Book.create({
        title : title,
        author : author,
        year : year
    })
    .then( result => {
      res.json(result);
    })
    .catch(() => {
          return res.status(400).json({
              msg : 'Product not created properly'
          })
    })
}

exports.booklist = (req, res) => {

    Book.find()
        .then((result) => {
           res.json(result)
        })
        .catch(err => {
              return res.status(400).json({
                  msg : "error in showing book from db"
              })
        })
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
  let bId = req.book._id;

  Book.deleteOne({_id : bId})
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

exports.findByBookId = (req, res,next, id) => {
   Book.findById(id)
       .then( book => {
            req.book = book
            next();
       })
       .catch(err => {
            return res.status(400).json({
                msg : "product not found"
            });
       })
}

exports.bookById = (req, res) => {
  return res.json(req.book);
}
