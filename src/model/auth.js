const connection = require('../config/mysql')

module.exports = {
  addUser: setData => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO users SET ?', setData, (err, result) => {
        if (!err) {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          delete newResult.password
          resolve(newResult)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  loginUser: data => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE username=? AND password=?', [data.username, data.password], (err, result) => {
        if (!err) {
          resolve(result[0])
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }, 
  updateUser: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE id=?', [setData, id], (err, result) => {
        if (!err) {
          const newResult = {
            id: id,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}