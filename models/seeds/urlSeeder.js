const mongoose = require('mongoose')
const Url = require('../url')

require('dotenv').config()


mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb seeder error!')
})

db.once('open', () => {
  console.log('mongodb connected!')

  for (let i = 0; i < 4; i++) {
    Url.create(
      {
        url: `https://localhost:3000/${i}`,
        shortUrl: `test: ${i}`
      }
    )
  }
  console.log('done')
})