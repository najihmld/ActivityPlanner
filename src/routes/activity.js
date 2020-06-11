const express = require('express');
const Route = express.Router();
const { superAdmin, admin } = require('../middleware')

const { addActivity } = require('../controller/activity')

Route
  .post('/', admin, addActivity)
module.exports = Route