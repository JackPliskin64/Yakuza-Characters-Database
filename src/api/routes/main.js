const mainRouter = require('express').Router()
const characterRouter = require('./character')
const userRouter = require('./users')

mainRouter.use('/characters', characterRouter)
mainRouter.use('/users', userRouter)

module.exports = mainRouter
