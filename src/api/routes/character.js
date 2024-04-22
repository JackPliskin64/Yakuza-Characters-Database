const {
  getCharacters,
  postCharacter,
  deleteCharacter,
  updateCharacter,
  getCharactersByAge
} = require('../controllers/character')
const characterRoutes = require('express').Router()
const { isAuth, isAdmin } = require('../../middlewares/auth')

characterRoutes.get('/', getCharacters)
characterRoutes.get('/findByAge/:age', getCharactersByAge)
characterRoutes.post('/', [isAuth], postCharacter)
characterRoutes.put('/:id', [isAuth], updateCharacter)
characterRoutes.delete('/:id', [isAdmin], deleteCharacter)

module.exports = characterRoutes
