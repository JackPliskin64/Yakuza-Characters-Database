const { getUsers, register, login } = require('../controllers/users')
const { isAuth } = require('../../middlewares/auth')
const userRoutes = require('express').Router()

userRoutes.get('/', [isAuth], getUsers)
userRoutes.post('/register', register)
userRoutes.post('/login', login)

module.exports = userRoutes
