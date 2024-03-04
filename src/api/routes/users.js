const { getUsers } = require('../controllers/users')
const userRoutes = require('express').Router()

userRoutes.get('/', getUsers)

module.exports = userRoutes
