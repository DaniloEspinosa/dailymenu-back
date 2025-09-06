require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('El deploy del backend funciona')
})

app.listen (PORT, () => {
  console.log(`Daily Menu app listening on PORT http://localhost:${PORT}`)
})
