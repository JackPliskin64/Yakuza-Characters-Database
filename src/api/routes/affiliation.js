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
const upload = require('../../middlewares/file')

affiliationRoutes.get('/', getAffiliations)
affiliationRoutes.get('/findByChairman/:chairman', getAffiliationByChairman)  // Nombre con %20 en vez de espacio
affiliationRoutes.get('/findByHeadquarters/:headquarters', getAffiliationByHeadquarters) // Nombre de la ciudad
affiliationRoutes.get('/findByMembers/:members', getAffiliationByMembers)
affiliationRoutes.post('/', [isAuth], upload.single("imgUrl"), postAffiliation)
affiliationRoutes.put('/:id', [isAuth], upload.single("imgUrl"), updateAffiliation)
affiliationRoutes.delete('/:id', [isAdmin], deleteAffiliation)

module.exports = affiliationRoutes