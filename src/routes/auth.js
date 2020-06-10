const express = require('express');
const Route = express.Router();
// const { superAdmin } = require('../middleware/auth')

const { loginUser, addUser } = require('../controller/auth')

Route
  .post('/login', loginUser)
  .post('/adduser', addUser)
  // .get('/users', superAdmin, getUsers)
  // .put('/:id', superAdmin, updateUser)
module.exports = Route
