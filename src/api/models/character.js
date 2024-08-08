const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: false, unique: true },
    name: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'characters'
  }
)

const Character = mongoose.model('characters', characterSchema, 'characters')
module.exports = Character
