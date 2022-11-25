const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const routes = require('./routes')
require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`Your Express is running on http://localhost:${3000}`)
})