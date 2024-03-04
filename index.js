//npm init -y      inicia el package.json
//Instalo express con     npm i express    y le adjunto la constante app
//npm i -D nodemon     instala nodemon y añade la dependencia como dev al package.json
require('dotenv').config()
const express = require('express')
const { conectDB, connectDB } = require('./src/config/db')
const characterRoutes = require('./src/api/routes/character')
const userRoutes = require('./src/api/routes/users')
const app = express()
const port = 3000
//Request, response, next
const pong = (req, res, next) => {
  return res.status(200).json('pong')
}

connectDB()
//Esta línea permite a mi servidor recibir req.body de formato .json
app.use(express.json())

app.use('/', characterRoutes)
app.use('/api/v1/characters', characterRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/ping', pong)
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})
app.listen(port, () => {
  console.log('http://localhost:' + port)
})
