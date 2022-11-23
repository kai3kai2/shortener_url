const { urlencoded } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000



app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Your Express is running on http://localhost:${3000}`)
})