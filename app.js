const { urlencoded } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const generateUrl = require('./generate-url')
const app = express()
const port = 3000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  // console.log('random elements is:', generateUrl(req.body))
  res.render('index')
})

app.get('/urls/show', (req, res) => {
  return res.render('show')
})

app.listen(port, () => {
  console.log(`Your Express is running on http://localhost:${3000}`)
})