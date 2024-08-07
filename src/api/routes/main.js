const mainRouter = require('express').Router()
const characterRouter = require('./character')
const userRouter = require('./users')
const affiliationRouter = require('./affiliation')

mainRouter.use('/characters', characterRouter)
mainRouter.use('/users', userRouter)
mainRouter.use('/affiliations', affiliationRouter)

module.exports = mainRouter
