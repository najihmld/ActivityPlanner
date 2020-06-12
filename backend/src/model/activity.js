const connection = require('../config/mysql')
const jwt = require('jsonwebtoken')

module.exports = {
  getActivity: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM activity ORDER BY id DESC', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
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
  },
  updateActivity: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE activity SET ? WHERE id=?', [setData, id], (err, result) => {
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
  },
  deleteActivity:  id => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM activity WHERE id=?', [id], (err, result) => {
        console.log(err)
        if (!err) {
          const newResult = {
            message: 'Successfully deleted activity!'
          }
          resolve(newResult)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}