const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storageCharacters = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Characters",
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
})

const storageAffiliations = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Affiliations",
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
})

const uploadCharacterImg = multer({ storage: storageCharacters });
const uploadAffiliationImg = multer({ storage: storageAffiliations });
module.exports = { uploadCharacterImg, uploadAffiliationImg };