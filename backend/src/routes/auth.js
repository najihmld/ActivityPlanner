const express = require('express');
const Route = express.Router();
const { superAdmin } = require('../middleware')

const { 
  loginUser, addUser } = require('../controller/auth')

Route
  .post('/login', loginUser)
  .post('/register', superAdmin, addUser)
module.exports = Route
