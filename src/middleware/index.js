const jwt = require('jsonwebtoken')
const helper = require('../helper')

module.exports = {
  superAdmin: (request, response, next) => {
    const token = request.headers.authorization

    jwt.verify(token, '210798', (err, result) => {
      if (
        (err && err.name === 'TokenExpiredError') ||
        (err && err.name === 'JsonWebTokenError')
      ) {
        const result = { message: err.message }
        return helper.response(response, 403, result)
      } else if (result.result.role !== '1') {
        const result = { message:"You don't have permission"}
        return helper.response(response, 403, result)
      } else {
        request.token = result
        next()
      }
    })
  },
  admin: (request, response, next) => {
    const token = request.headers.authorization

    jwt.verify(token, '210798', (err, result) => {
      if (
        (err && err.name === 'TokenExpiredError') ||
        (err && err.name === 'JsonWebTokenError')
      ) {
        const result = { message: err.message }
        return helper.response(response, 403, result)
      } else if (
          (result.result.role !== '2') &&
          (result.result.role !== '1')
      ) {
        const result = { message:"You don't have permission"}
        return helper.response(response, 403, result)
      } else {
        request.token = result
        next()
      }
    })
  },
  director: (request, response, next) => {
    const token = request.headers.authorization

    jwt.verify(token, '210798', (err, result) => {
      if (
        (err && err.name === 'TokenExpiredError') ||
        (err && err.name === 'JsonWebTokenError')
      ) {
        const result = { message: err.message }
        return helper.response(response, 403, result)
      } else if (
        (result.result.role !== '3') &&
        (result.result.role !== '2') &&
        (result.result.role !== '1')
      ) {
        const result = { message:"You don't have permission"}
        return helper.response(response, 403, result)
      } else {
        request.token = result
        next()
      }
    })
  },
  headOfEngineering: (request, response, next) => {
    const token = request.headers.authorization

    jwt.verify(token, '210798', (err, result) => {
      if (
        (err && err.name === 'TokenExpiredError') ||
        (err && err.name === 'JsonWebTokenError')
      ) {
        const result = { message: err.message }
        return helper.response(response, 403, result)
      } else if (
        (result.result.role !== '4') &&
        (result.result.role !== '2') &&
        (result.result.role !== '1')
      ) {
        const result = { message:"You don't have permission"}
        return helper.response(response, 403, result)
      } else {
        request.token = result
        next()
      }
    })
  },
  operator: (request, response, next) => {
    const token = request.headers.authorization

    jwt.verify(token, '210798', (err, result) => {
      if (
        (err && err.name === 'TokenExpiredError') ||
        (err && err.name === 'JsonWebTokenError')
      ) {
        const result = { message: err.message }
        return helper.response(response, 403, result)
      } else if (
        (result.result.role !== '5') &&
        (result.result.role !== '2') &&
        (result.result.role !== '1')
      ) {
        const result = { message:"You don't have permission"}
        return helper.response(response, 403, result)
      } else {
        request.token = result
        next()
      }
    })
  }
}