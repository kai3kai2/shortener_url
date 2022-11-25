const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
const generateUrl = require('./generate-url')
const Url = require('./models/url')
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

app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  // console.log('random elements is:', generateUrl(req.body))
  res.render('index')
})

app.post('/', (req, res) => {
  const url = req.body.url
  const shortCode = generateUrl(5)
  if (!url) return res.redirect('/')
  Url.findOne({ url })
    .then(data =>
      data ? data : Url.create({ url, shortUrl: generateUrl(5) }))
    .then(data =>
      res.render('index', { initUrl: url, shorten: data.shortUrl }),
    )
    .catch(error => console.log(error))
})

app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  Url.findOne({ shortUrl })
    .then(data => {
      if (!data) {
        console.log(data)
        return res.render('error')
      }

      res.redirect(data.url)
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Your Express is running on http://localhost:${3000}`)
})