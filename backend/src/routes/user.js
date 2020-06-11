const express = require('express');
const Route = express.Router();
const { superAdmin } = require('../middleware')

const { getUsers, updateUser, deleteUser } = require('../controller/user')

Route
  .get('/', superAdmin, getUsers)
  .put('/:id', superAdmin, updateUser)
  .delete('/:id', superAdmin, deleteUser)
module.exports = Route
