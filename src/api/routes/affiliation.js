const {
  getAffiliations,
  postAffiliation,
  deleteAffiliation,
  updateAffiliation,
  getAffiliationByChairman,
  getAffiliationByHeadquarters,
  getAffiliationByMembers
} = require('../controllers/affiliation')
const affiliationRoutes = require('express').Router()
const { isAuth, isAdmin } = require('../../middlewares/auth')
//para carpeta universal
const upload = require('../../middlewares/file')
//para carpeta correspondiente a cada tipo
const { uploadCharacterImg, uploadAffiliationImg } = require('../../middlewares/fileChangeStorage')

affiliationRoutes.get('/', getAffiliations)
affiliationRoutes.get('/findByChairman/:chairman', getAffiliationByChairman)  // Nombre con %20 en vez de espacio
affiliationRoutes.get('/findByHeadquarters/:headquarters', getAffiliationByHeadquarters) // Nombre de la ciudad
affiliationRoutes.get('/findByMembers/:members', getAffiliationByMembers)
affiliationRoutes.post('/', [isAuth], uploadAffiliationImg.single("imgUrl"), postAffiliation)
affiliationRoutes.put('/:id', [isAuth], uploadAffiliationImg.single("imgUrl"), updateAffiliation)
affiliationRoutes.delete('/:id', [isAdmin], deleteAffiliation)

module.exports = affiliationRoutes