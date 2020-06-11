const { addUser, loginUser, getUsers, updateUser } = require('../model/auth')
const helper = require('../helper')
const jwt = require('jsonwebtoken')

module.exports = {
  addUser: async (req, res) => {
    try {
      const setData = {
        role: req.body.role,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
      }
      const result = await addUser(setData)
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  },
  loginUser: async (req, res) => {
    try {
      const data = {
        username: req.body.username,
        password: req.body.password
      }
      const result = await loginUser(data)
      const token = jwt.sign({result}, '210798', {expiresIn: '1h'})
      const newResult = {
        role: result.role,
        token: token
      }
      return helper.response(res, 200, newResult)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  },
  getUsers: async (req, res) => {
    try {
      const result = await getUsers()
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  },
  updateUser: async (req, res) => {
    try {
      const setData = {
        role: req.body.role,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
      }
      const id = req.params.id
      const result = await updateUser(setData, id)
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  }
}