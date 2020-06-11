const express = require('express');
const Route = express.Router();
const { superAdmin, admin } = require('../middleware')

const { addActivity, updateActivity } = require('../controller/activity')

Route
  .post('/', admin, addActivity)
  .put('/:id', admin, updateActivity)
module.exports = Route