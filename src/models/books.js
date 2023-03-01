const db = require('../config/db')

module.exports = {
    // GET ALL BOOKS AND SORT BY TITLE AND LIMIT 0, 7 (default)
    getAllBooks: (page, limit) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT books.id, books.title, books.description, books.author, books.image, genres.book_genre, availability.available, books.released_date
            FROM books
            JOIN genres
            ON genres.id = books.genre_id
            JOIN availability
            ON books.available_id = availability.id `, (err, result) =>{
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getABook: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE id=?`, [id], (err, result) =>{
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // ADD BOOK
    insertBook: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT books SET ?`, data, (err, result) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    // UPDATE BOOK
    updateBook: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE books SET ? WHERE id = ?`, [data, id], (err, result) => {
                if(!err) {
                    resolve(data, id)
                } else {
                    reject(err)
                }
            })
        })
    }, 
    // DELETE BOOK
    deleteBook: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM books WHERE id = ?`, id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // SHOW AVAILABLE BOOKS
    getAvailableBooks: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE available_id = 1`, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getNotAvailableBooks: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE available_id = 0`, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // SORT BY ... & SEARCH
    searchBook: (title, page, limit) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE title LIKE ? ORDER BY released_date LIMIT ${page}, ${limit}`, ["%"+title+"%"], (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // BORROW BOOK
    borrowBook: (id) => {
        return new Promise((resolve,  reject) => {
            db.query(`SELECT * FROM books WHERE id = ? && available_id = 1`, id, (err, result) => {
                if(!err) {
                    if(result != '') {
                        db.query(`UPDATE books SET available_id = 0 WHERE id = ?`, id, (err, result) => {
                            if(!err) {
                                resolve(result) // respons tdk standar
                            } else {
                                res.json({
                                    status: 201,
                                    message: 'Sorry, book you are looking for unvailable this time',
                                    data: id
                                })
                            }
                        })
                    }
                } else {
                    reject(err)
                }
            })
        })
    },
    // RETURN BOOK
    returnBook: (id, available_id) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM books WHERE id = ? && available_id = 0`, id, (err, result) => {
                if(!err) {
                    if(result != '') {
                        db.query(`UPDATE books SET available_id = 1 WHERE id = ?`, id, (err, result) => {
                            if(!err) {
                                resolve(result) // respons tdk standar
                            } else {
                                res.json({
                                    status: 201,
                                    message: 'Sorry, book was returned before.',
                                    data: id
                                })
                            }
                        })
                    }
                } else {
                    reject(err)
                }
            })
        })
    },
    // SHOW ALL GENRES
    getAllGenres: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM genres ORDER BY book_genre ASC`, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    insertGenre: (book_genre) =>{
        return new Promise((resolve, reject) => {
            db.query(`INSERT genres SET ?`, book_genre, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    updateGenre: (id, book_genre) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE genres SET ? WHERE id = ?`, [book_genre, id], (err, result) => {
                if(!err) {
                    resolve(result)
                } else{
                    reject(err)
                }
            })
        })
    },
    deleteGenre: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM genres WHERE id = ?`, id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}