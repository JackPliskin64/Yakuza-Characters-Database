require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const app = express()
const mainRouter = require('./src/api/routes/main')
const port = 3000
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
