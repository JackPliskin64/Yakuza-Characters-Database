const Character = require('../models/character')

//POST
const postCharacter = async (req, res, next) => {
  try {
    const newCharacter = new Character(req.body)
    const characterSaved = await newCharacter.save()
    return res.status(201).json(characterSaved)
  } catch (error) {
    return res.status(400).json('Error al crear el personaje')
  }
}

//READ
const getCharacters = async (req, res, next) => {
  try {
    //Model.find() - encuentra TODOS los datos de dicha colección
    const allChars = await Character.find()
    return res.status(200).json(allChars)
  } catch (error) {
    return res.status(400).json('Ha fallado la conexión')
  }
}

//FILTER BY AGE
const getCharactersByAge = async (req, res, next) => {
  try {
    const { age } = req.params
    const characters = await Character.find({ age: { $lte: age } })
    return res.status(200).json(characters)
  } catch (error) {
    return res.status(400).json('Ha fallado la conexión')
  }
}

//UPDATE

const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params
    const newCharacter = new Character(req.body)
    newCharacter._id = id
    //Me devolverá el dato antiguo pero actualizará al nuevo, por eso añadimos { new: true } para que nos muestre el nuevo
    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      newCharacter,
      { new: true }
    )
    return res.status(200).json(characterUpdated)
  } catch (error) {
    return res.status(400).json('Error al actualizar personaje')
  }
}

//DELETE
const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params
    const characterDeleted = await Character.findByIdAndDelete(id)
    return res.status(200).json(characterDeleted)
  } catch (error) {
    return res.status(400).json('Error al eliminar personaje')
  }
}

module.exports = {
  getCharacters,
  postCharacter,
  deleteCharacter,
  updateCharacter,
  getCharactersByAge
}
