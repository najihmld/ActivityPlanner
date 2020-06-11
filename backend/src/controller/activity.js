const { getActivity, addActivity, updateActivity, deleteActivity } = require('../model/activity')
const helper = require('../helper')
const jwt = require('jsonwebtoken')

module.exports = {
  getActivity: async (req, res) => {
    try {     
      const token = await req.headers.authorization
      
      jwt.verify(token, '210798', async (err, item) => {
        const role = item.result.role
        const result = await getActivity()

        if (role !== '1' && role !== '2') {
          const newResult = []
          result.map((item) => {
            if (item.role === role) {
              newResult.push(item)
            }
          })
          return helper.response(res, 200, newResult)
        } else {
          return helper.response(res, 200, result)
        }
        
      }) 
    } catch (err) {
      return helper.response(res, 404, err)
    }
  },
  addActivity: async (req, res) => {
    try {
      const setData = {
        role: req.body.role,
        title: req.body.title,
        description: req.body.description
      }
      const result = await addActivity(setData)
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  },
  updateActivity: async (req, res) => {
    try {
      const setData = {
        to: req.body.to,
        title: req.body.title,
        description: req.body.description
      }
      const id = req.params.id
      const result = await updateActivity(setData, id)
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  }, 
  deleteActivity: async (req, res) => {
    try {
      const id = req.params.id
      const result = await deleteActivity(id)
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  }
}