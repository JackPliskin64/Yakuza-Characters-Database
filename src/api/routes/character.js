const {
  getCharacters,
  postCharacter,
  deleteCharacter,
  updateCharacter,
  getCharactersByAge
} = require('../controllers/character')
const characterRoutes = require('express').Router()

characterRoutes.get('/', getCharacters)
characterRoutes.get('/findByAge/:age', getCharactersByAge)
characterRoutes.post('/', postCharacter)
characterRoutes.put('/:id', updateCharacter)
characterRoutes.delete('/:id', deleteCharacter)

module.exports = characterRoutes
