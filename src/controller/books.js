const booksModel = require('../models/books')

module.exports = {
    // GET ALL BOOKS AND SORT BY TITLE AND LIMIT 0, 7 (default)
    getBooks: (req, res) => {
        const page = req.query.page || 0
        const limit = req.query.limit || 7 

        booksModel.getAllBooks(page, limit)
        .then(result => res.json(result))
        .catch(err => console.log(err))
        // .then(result => res.json({
        //     status: 200,
        //     message: 'Show all books collection',
        //     data: result
        // }))
        // .catch(err => res.json({
        //     status: 404,
        //     message: 'Bad connection',
        //     data: err
        // }))
    },
    getABook: (req, res) => {
        const id = req.query.id

        booksModel.getABook(id)
        .then(result => res.json(result))
        .catch(err => console.log(err))
    },
    // ADD BOOK
    insertBook: (req, res) => {
        const data = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author || 'ME',
            image: req.body.image,
            available_id: req.body.available_id || 1,
            genre_id: req.body.genre_id || 1,
            released_date: new Date()
        }
        booksModel.insertBook(data)
        .then(result => res.json({
            status: 200,
            message: 'Add book succes',
            data: result
        }))
        .catch(err => res.json({
            status: 400,
            message: 'Failed operation',
            data: err
        }))
    },
    // UPDATE BOOK
    updateBook: (req, res) => {
        const data = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author || 'ME',
            image: req.body.image,
            available_id: req.body.available_id || 1,
            genre_id: req.body.genre_id || 1,
            released_date: new Date()
        }
        const id = req.body.id

        booksModel.updateBook(data, id)
        .then(result => res.json({
            status: 200,
            message: 'Book update succes',
            data: result
        }))
        .catch(err => res.json({
            status: 400,
            message: 'Operation failed',
            data: err
        }))
    },
    // DELETE BOOK
    deleteBook: (req, res) => {
        const id = req.query.id

        booksModel.deleteBook(id)
        .then(result => res.json({
            status: 200,
            message: 'Delete book success',
            data: result
        }))
        .catch(err => res.json({
            status: 400,
            message: 'Opeartion failed',
            data: err
        }))
    },
    // SHOW AVAILABLE BOOK
    getAvailableBooks: (req, res) => {
        const page = req.query.page || 0
        const limit = req.query.limit || 7 

        booksModel.getAvailableBooks(page, limit)
        .then(result => res.json({
            status: 200,
            message: 'Show all books available',
            data: result
        }))
        .catch(err => res.json({
            status: 404,
            message: 'Data not found',
            data: err
        }))
    },
    getNotAvailableBooks: (req, res) => {
        const page = req.query.page || 0
        const limit = req.query.limit || 7 

        booksModel.getNotAvailableBooks(page, limit)
        .then(result => res.json({
            status: 200,
            message: 'Show all books available',
            data: result
        }))
        .catch(err => res.json({
            status: 404,
            message: 'Data not found',
            data: err
        }))
    },
    // SORT BY DATE RELEASED & SEARCH
    searchBook: (req, res) => {
        const title = req.query.title
        const page = req.query.page || 0
        const limit = req.query.limit || 7

        
        booksModel.searchBook(title, page, limit)
        .then(result => res.json({
            status: 200,
            message: 'Search result',
            data: result
        }))
        .catch(err => res.json({
            status: 404,
            message: 'Data not found',
            data: err
        }))
    },
    // BORROW BOOK
    borrowBook: (req, res) => {
        const id = req.query.id

        booksModel.borrowBook(id)
        .then(result => res.json({
            status: 200,
            message: 'Your borrow success',
            data: id
        }))
        .catch(err => res.json({
            status: 404,
            message: 'Data not found',
            data: err
        }))
    },
    // RETURN BOOK
    returnBook: (req, res) => {
        const id = req.query.id
        const available_id = req.query.available_id

        booksModel.returnBook(id, available_id)
        .then(result => res.json({
            status: 200,
            message: 'Return book success',
            data: id, available_id
        }))
        .catch(err => res.json({
            status: 404,
            message: 'Bad connection',
            data: id, available_id
        }))
    },
    // SHOW ALL GENRES
    getAllGenres: (req, res) => {
        booksModel.getAllGenres()
        .then(result => res.json(result))
        .catch(err => console.log(err))
        // .then(result => res.json({
        //     status: 200,
        //     message: 'Show all books genres',
        //     data: result
        // }))
        // .catch(err => res.json({
        //     status: 404,
        //     message: 'No data',
        //     data: err
        // }))
    },
    insertGenre: (req, res) => {
        const book_genre = { book_genre: req.body.book_genre }

        booksModel.insertGenre(book_genre)
        .then(result => res.json({
            status: 200,
            message: 'Insert genre success',
            data: result
        }))
        .catch(err => res.json({
            status: 401,
            message: 'Operation failed',
            data: err
        }))
    },
    updateGenre: (req, res) => {
        const id = req.body.id
        const book_genre = { book_genre: req.body.book_genre }

        booksModel.updateGenre(id, book_genre)
        .then(result => res.json({
            status: 200,
            message: 'Update genre success',
            data: result
        }))
        .catch(err => res.json({
            status: 401,
            message: 'Operation failde',
            data: err
        }))
    },
    deleteGenre: (req, res) => {
        const id = req.query.id

        booksModel.deleteGenre(id)
        .then(result => res.json({
            status: 200,
            message: 'Delete genre success',
            data: result
        }))
        .catch(err => res.json({
            status: 401,
            message: 'Operation failed',
            data: err
        }))
    }
}