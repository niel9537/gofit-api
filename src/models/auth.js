const conn = require('../config/db')

module.exports = {
  userRegister: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  userLogin: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM users WHERE username = ? ', data.username, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(result)
        }
      })
    })
  },
  registerCheck: (data) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM users WHERE username = ? OR email = ?`, [data.username, data.email], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(result)
        }
      })
    })
  }
}