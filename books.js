const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            maxlength : 64
        },
        author : {
            type : String,
            required : true,
            maxlength : 64
        },
        year : {
            type : Number,
            required : true,
            maxlength : 32
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('BOOK', bookSchema);