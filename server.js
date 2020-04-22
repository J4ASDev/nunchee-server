const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')

const app = express()

app.use(cors())

app.get('*', function (req, res) {
  fetch(`https://mychannel.nunchee.tv${req.path}`)
    .then((data) => data.json())
    .then(({ data }) => res.json(data))
    .catch((err) => res.json({ err }))
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
