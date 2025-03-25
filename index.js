require('dotenv').config()
console.log("Krish vaghela")
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
  res.send('krishvaghela1212')
})
app.get('/login', (req, res) => {
  res.send("<h1>Please login yo your instagram</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})