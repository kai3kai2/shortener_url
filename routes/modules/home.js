const express = require('express')
const router = express.Router()
const generateUrl = require('../../generate-url')
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const url = req.body.url
  const shortCode = generateUrl(5)
  if (!url) return res.redirect('/')
  Url.findOne({ url })
    .then(data =>
      data ? data : Url.create({ url, shortUrl: shortCode }))
    .then(data =>
      res.render('index', { initUrl: url, shorten: `http://localhost:3000/${data.shortUrl}` }),
    )
    .catch(error => console.log(error))
})

router.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  Url.findOne({ shortUrl })
    .then(data => {
      if (!data) {
        console.log(data)
        return res.render('error')
      }
      // 重複連結抓原本的亂碼
      res.redirect(data.url)
    })
    .catch(error => console.log(error))
})

module.exports = router