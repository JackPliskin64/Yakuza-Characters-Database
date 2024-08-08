const Affiliation = require('../models/affiliation')
const { deleteFile } = require('../../utils/deleteFile')

//POST
const postAffiliation = async (req, res, next) => {
  try {
    const newAffiliation = new Affiliation(req.body)
    console.log(`Lets create a new affiliation with the following information: ${JSON.stringify(newAffiliation)}`) // JSON.stringify para que se vea bonito
    if (req.file) {
      newAffiliation.imgUrl = req.file.path
      console.log(`Image URL es ${newAffiliation.imgUrl}`)
    }
    const affiliationSaved = await newAffiliation.save()
    console.log('Affiliation created successfully!')
    return res.status(201).json(affiliationSaved)
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      return res.status(409).json('Registro duplicado')
    } else {
      return res.status(400).json('Error al crear afiliación')
    }
  }
}

//READ ALL AFFILIATIONS WITH ALL INFO
const getAffiliations = async (req, res, next) => {
  try {
    console.log('Lets find all affiliations!')
    const allAffiliatins = await Affiliation.find().populate('captains')
    console.log(`There are ${allAffiliatins.length} affiliations`)
    return res.status(200).json(allAffiliatins)
  } catch (error) {
    console.log(error)
    return res.status(400).json('Ha fallado la conexión')
  }
}

//FIND BY LEADER WITH NAME AND IMAGE OF CAPTAINS
const getAffiliationByChairman = async (req, res, next) => {
  try {
    const { chairman } = req.params
    console.log(`Lets find affiliation by chairman ${chairman}`)
    const affiliations = await Affiliation.find({ chairman: { $eq: chairman } }).populate({
      path: 'captains',
      select: 'name imgUrl -_id -createdAt -updatedAt -__v'
    })
    if (affiliations.length === 0) {
      console.log('There is no affiliation with that chairman')
      return res.status(404).json('Not found')
    } else {
      console.log(`This is a chairman of ${affiliations[0].name}!`)
      return res.status(200).json(affiliations)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json('Ha fallado la conexión')
  }
}

//FIND BY HEADQUARTERS
const getAffiliationByHeadquarters = async (req, res, next) => {
  try {
    const { headquarters } = req.params
    console.log(`Lets find affiliation by headquarters ${headquarters}`)
    const affiliations = await Affiliation.find({ headquarters: { $eq: headquarters } })
    if (affiliations.length === 0) {
      console.log('There is no affiliation in that location')
      return res.status(404).json('Not found')
    } else {
      console.log(`There are ${affiliations.length} headquarters in ${headquarters}!`)
      return res.status(200).json(affiliations)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json('Ha fallado la conexión')
  }
}

//FILTER BY NUMBER OF MEMBERS
const getAffiliationByMembers = async (req, res, next) => {
  try {
    const { members } = req.params
    console.log(`Lets find affiliations with number of members bigger than ${members}`)
    const affiliations = await Affiliation.find({ members: { $gte: members } })
    if (affiliations.length === 0) {
      console.log('Such a large affiliation does not exist...')
      return res.status(404).json('Not found')
    } else {
      console.log(`There are ${affiliations.length} affiliations with more than ${members} members!`)
      return res.status(200).json(affiliations)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json('Ha fallado la conexión')
  }
}

//UPDATE
const updateAffiliation = async (req, res, next) => {
  try {
    const { id } = req.params

    // Con esta parte aseguramos de actualizar unicamente los campos que se envian en el body
    const updateFields = {};
    for (const field of Object.keys(req.body)) {
      if (req.body[field]) {
        updateFields[field] = req.body[field]
      }
    }

    console.log(`Lets update affiliation N${id} with the following information: ${JSON.stringify(updateFields)}`)
    updateFields._id = id
    if (req.file) {
      updateFields.imgUrl = req.file.path
      const oldAffiliation = await Affiliation.findById(id)
      deleteFile(oldAffiliation.imgUrl)
    }
    const affiliationUpdated = await Affiliation.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    ).populate('captains', '-createdAt -updatedAt -__v')
    if (affiliationUpdated.length === 0) {
      console.log('There is no affiliation with that ID')
      return res.status(404).json('Not found')
    } else {
      console.log(`Affiliation ${affiliationUpdated.name} is updated successfully!`)
      return res.status(200).json(affiliationUpdated)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json('Error al actualizar afiliación')
  }
}

//DELETE
const deleteAffiliation = async (req, res, next) => {
  try {
    const { id } = req.params
    console.log(`Lets obliterate affiliation N${id} !!!`)
    const affiliationDeleted = await Affiliation.findByIdAndDelete(id)
    if (affiliationDeleted === null) {
      console.log('There is no affiliation with that ID')
      return res.status(404).json('Not found')
    } else {
      deleteFile(affiliationDeleted.imgUrl)
    }
    console.log(`Affiliation ${affiliationDeleted.name} is deleted successfully!`)
    return res.status(200).json(affiliationDeleted)
  } catch (error) {
    console.log(error)
    return res.status(400).json('Error al eliminar afiliación')
  }
}

module.exports = {
  getAffiliations,
  postAffiliation,
  deleteAffiliation,
  updateAffiliation,
  getAffiliationByChairman,
  getAffiliationByHeadquarters,
  getAffiliationByMembers
}
