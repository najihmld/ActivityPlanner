const express = require('express');
const Route = express.Router();
const { admin, users } = require('../middleware')

const { getActivity, addActivity, updateActivity, deleteActivity } = require('../controller/activity')

Route
  .get('/', users, getActivity)
  .post('/', admin, addActivity)
  .put('/:id', admin, updateActivity)
  .delete('/:id', admin, deleteActivity)
module.exports = Route