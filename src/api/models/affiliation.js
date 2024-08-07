const mongoose = require('mongoose')

const affiliationSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: false, unique: true },
    name: { type: String, required: true, unique: true },
    members: { type: Number, required: true },
    chairman: { type: String, required: true, unique: true },
    headquarters: { type: String, required: true },
    captains: [{ type: mongoose.Types.ObjectId, ref: 'characters' }]
  },
  {
    timestamps: true,
    collection: 'affiliations'
  }
)

const Affiliation = mongoose.model('affiliations', affiliationSchema, 'affiliations')
module.exports = Affiliation