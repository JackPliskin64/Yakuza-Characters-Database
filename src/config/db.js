/* npm i mongoose - todo lo que tenga que ver con la bbdd */
/* npm i dotenv - me permite acceder a las variables de entorno, se suele configurar en la línea 1 del index.js */

const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Funcionando correctamente')
  } catch (error) {
    console.log('Error conectando con la Base de Datos')
    console.log(error)
  }
}

module.exports = { connectDB }
