const {
  getCharacters,
  postCharacter,
  deleteCharacter,
  updateCharacter,
  getCharactersByAge
} = require('../controllers/character')
const characterRoutes = require('express').Router()
const { isAdmin } = require('../../middlewares/auth')
const { getUsers, register, login } = require('../controllers/users')

characterRoutes.get('/', getCharacters)
characterRoutes.get('/findByAge/:age', getCharactersByAge)
characterRoutes.post('/', postCharacter)
characterRoutes.put('/:id', updateCharacter)
characterRoutes.delete('/:id', [isAdmin], deleteCharacter)

module.exports = characterRoutes
