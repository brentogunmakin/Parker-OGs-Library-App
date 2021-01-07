const express = require('express');
const books = require('./totallyRealBooks.json');

const bookapp = express();

const CONNECTION_PORT = 3000;

bookapp.use(express.json());

bookapp.get('/api/books', (req, res) => {
    let library = [];
    

    for (let book of books) {
        library.push({
            "Index" : book.index,
           "Title: " : book.Book_Title,
           "Author: " : book.Author,
           "ISBN Number: " : book.ISBN_Number,
           "Checked Out: " : book.is_Checked_Out
        })
    }
    res.status(200).send(JSON.stringify(library))
})







bookapp.listen(CONNECTION_PORT, ()=> {
    console.log(`Listening on port ${CONNECTION_PORT}`)
})
module.exports = bookapp;