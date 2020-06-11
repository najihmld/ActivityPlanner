const { getUsers, updateUser, deleteUser } = require('../model/user')
const helper = require('../helper')
const jwt = require('jsonwebtoken')

module.exports = {
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
  },
  deleteUser: async (req, res) => {
    try {
      const id = req.params.id
      const result = await deleteUser(id)
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  }
}