const {
  getCharacters,
  postCharacter,
  deleteCharacter,
  updateCharacter,
  getCharactersByAge
} = require('../controllers/character')
const characterRoutes = require('express').Router()
const { isAuth, isAdmin } = require('../../middlewares/auth')
//carpeta universal
const upload = require('../../middlewares/file')
//carpeta correspondiente a cada tipo
const { uploadCharacterImg, uploadAffiliationImg } = require('../../middlewares/fileChangeStorage')

characterRoutes.get('/', getCharacters)
characterRoutes.get('/findByAge/:age', getCharactersByAge)
characterRoutes.post('/', [isAuth], uploadCharacterImg.single("imgUrl"), postCharacter)
characterRoutes.put('/:id', [isAuth], uploadCharacterImg.single("imgUrl"), updateCharacter)
characterRoutes.delete('/:id', [isAdmin], deleteCharacter)

module.exports = characterRoutes
