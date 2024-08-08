const Character = require('../models/character')

//POST
const postCharacter = async (req, res, next) => {
  try {
    const newCharacter = new Character(req.body)
    console.log(`Lets create a new affiliation with the following information: ${newCharacter}`)
    if (req.file) {
      console.log(req.file)
      newCharacter.imgUrl = req.file.path
      console.log(`Image URL es ${newAffiliation.imgUrl}`)
    }

    const characterSaved = await newCharacter.save()
    console.log('Character created successfully!')
    return res.status(201).json(characterSaved)
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json('Registro duplicado')
    } else {
      return res.status(400).json('Error al crear el personaje')
    }
  }
}

//READ
const getCharacters = async (req, res, next) => {
  try {
    console.log('Lets find all characters!')
    const allChars = await Character.find()
    console.log(`There are ${allChars.length} characters`)
    return res.status(200).json(allChars)
  } catch (error) {
    return res.status(400).json('Ha fallado la conexión')
  }
}

//FILTER BY AGE
const getCharactersByAge = async (req, res, next) => {
  try {
    const { age } = req.params
    console.log(`Lets find characters who are under ${age} years old`)
    const characters = await Character.find({ age: { $lte: age } })
    if (characters.length === 0) {
      console.log('All characters are too old')
      return res.status(404).json('Not found')
    } else {
      console.log(`There are ${characters.length} characters under ${age} years old!`)
      return res.status(200).json(characters)
    }
  } catch (error) {
    return res.status(400).json('Ha fallado la conexión')
  }
}

//UPDATE

const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params
    const newCharacter = new Character(req.body)
    console.log(`Lets update character N${id} with the following information: ${newCharacter}`)
    newCharacter._id = id
    if (req.file) {
      newCharacter.imgUrl = req.file.path
      const oldCharacter = await Character.findById(id)
      deleteFile(oldCharacter.imgUrl)
    }
    //Me devolverá el dato antiguo pero actualizará al nuevo, por eso añadimos { new: true } para que nos muestre el nuevo
    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      newCharacter,
      { new: true }
    )
    if (characterUpdated.length === 0) {
      console.log('There is no character with that ID')
      return res.status(404).json('Not found')
    } else {
      console.log(`Character ${characterUpdated.name} is updated successfully!`)
      return res.status(200).json(characterUpdated)
    }
  } catch (error) {
    return res.status(400).json('Error al actualizar personaje')
  }
}

//DELETE
const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params
    console.log(`Lets obliterate character N${id} !!`)
    const characterDeleted = await Character.findByIdAndDelete(id)
    if (characterDeleted === null) {
      console.log('There is no character with that ID')
      return res.status(404).json('Not found')
    } else {
      deleteFile(characterDeleted.imgUrl)
    }
    console.log(`Affiliation ${characterDeleted.name} is deleted successfully!`)
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
