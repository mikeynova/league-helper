const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')

const app = express()
const config = require('../webpack.config')
const summonerRoutes = require('./routes/summoner-routes')

const compiler = webpack(config)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  quiet: false,
  noInfo: true,
  stats: {
    colors: true,
  },
}))
app.use(require('webpack-hot-middleware')(compiler))

app.use('/summonerInfo', summonerRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', '../dist/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('3000 is runnning!')
})
