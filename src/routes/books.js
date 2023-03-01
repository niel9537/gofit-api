const express = require('express')
const Route = express.Router()

const verify = require('../middleware/verifyToken')
const booksController = require('../controller/books')


Route
    // RESTful BOOK
    .get('/books', booksController.getBooks)
    .get('/books/id', booksController.getABook)
    .post('/books?id',  booksController.insertBook)
    .put('/books',  booksController.updateBook)
    .delete('/books',  booksController.deleteBook)
    .get('/available', booksController.getAvailableBooks)
    .get('/unavailable', booksController.getNotAvailableBooks)
    .get('/search', booksController.searchBook)

    // BORROW & RETURN BOOK
    .post('/borrow', booksController.borrowBook)
    .post('/return', booksController.returnBook)

    // BOOKS GENRES
    .get('/genres', booksController.getAllGenres)
    .post('/genres',  booksController.insertGenre)
    .patch('/genres',  booksController.updateGenre)
    .delete('/genres',  booksController.deleteGenre)
    
    // // RESTful BOOK
    // .get('/', booksController.getBooks)
    // .post('/', verify, booksController.insertBook)
    // .patch('/', verify, booksController.updateBook)
    // .delete('/', verify, booksController.deleteBook)
    // .get('/available', booksController.getAvailableBooks)
    // .get('/search', booksController.searchBook)

    // // BORROW & RETURN BOOK
    // .get('/borrow', booksController.borrowBook)
    // .get('/return', booksController.returnBook)

    // // BOOKS GENRES
    // .get('/genres', booksController.getAllGenres)
    // .post('/genres', verify, booksController.insertGenre)
    // .patch('/genres', verify, booksController.updateGenre)
    // .delete('/genres', verify, booksController.deleteGenre)

module.exports = Route
