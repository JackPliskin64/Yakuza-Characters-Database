require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const app = express()
const mainRouter = require('./src/api/routes/main')
const port = 3000
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

//Ejecuto la funcion basica
connectDB()
//Esta línea permite a mi servidor recibir req.body de formato .json
app.use(express.json())
//Esta linea permite la conexion con el front
app.use(cors())
//Establecer las rutas
app.use('/api/v1', mainRouter)
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})
//Listener
app.listen(port, () => {
  console.log('http://localhost:' + port)
})
