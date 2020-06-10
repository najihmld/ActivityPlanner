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
  loginUser: () => {
    return new Promise((resolve, reject) => {

    })
  }
}