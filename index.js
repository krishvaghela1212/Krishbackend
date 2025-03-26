require('dotenv').config()
console.log("Krish vaghela")
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
  res.send('krishvaghela1212')
})
app.get('/login', (req, res) => {
  res.send("<h1>Please login yo your instagram</h1>")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



