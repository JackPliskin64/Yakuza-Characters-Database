const {
  getCharacters,
  postCharacter,
  deleteCharacter,
  updateCharacter,
  getCharactersByAge
} = require('../controllers/character')
const characterRoutes = require('express').Router()
const { isAuth, isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')

characterRoutes.get('/', getCharacters)
characterRoutes.get('/findByAge/:age', getCharactersByAge)
characterRoutes.post('/', [isAuth], upload.single("imgUrl"), postCharacter)
characterRoutes.put('/:id', [isAuth], upload.single("imgUrl"), updateCharacter)
characterRoutes.delete('/:id', [isAdmin], deleteCharacter)

module.exports = characterRoutes
