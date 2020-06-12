const connection = require('../config/mysql')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT id, role, name, username FROM users', (err, result) => {
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
  },
  deleteUser: id => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM users WHERE id=?', [id], (err, result) => {
        if (!err) {
          const newResult = {
            message: 'Successfully deleted user!'
          }
          resolve(newResult)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}