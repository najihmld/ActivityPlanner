const connection = require('../config/mysql')

module.exports = {
  addActivity: setData => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO activity SET ?', [setData], (err, result) => {
        if (!err) {
          const newResult = {
            id: result.insertId,
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