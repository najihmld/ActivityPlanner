const express = require('express')
const Route = express.Router()

const auth = require('./routes/auth')
const user = require('./routes/user')
const activity = require('./routes/activity')

Route
  .use('/auth', auth)
  .use('/user', user)
  .use('/activity', activity)
module.exports = Route


