
const express = require('express')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const port = 5000

const app = express()

// app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))
app.listen(3000)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));