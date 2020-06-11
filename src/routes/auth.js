const express = require('express');
const Route = express.Router();
const { superAdmin } = require('../middleware/auth')

const { loginUser, addUser, getUsers } = require('../controller/auth')

Route
  .post('/login', loginUser)
  .post('/adduser', superAdmin, addUser)
  .get('/users', superAdmin, getUsers)
  // .put('/:id', superAdmin, updateUser)
module.exports = Route
