const { addActivity } = require('../model/activity')
const helper = require('../helper')

module.exports = {
  addActivity: async (req, res) => {
    try {
      const setData = {
        to: req.body.to,
        title: req.body.title,
        description: req.body.description
      }
      const result = await addActivity(setData)
      return helper.response(res, 200, result)
    } catch (err) {
      return helper.response(res, 404, err)
    }
  }
}