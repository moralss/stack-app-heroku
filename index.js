
const express = require('express')
//const serveStatic = require('serve-static')
//const history = require('connect-history-api-fallback')
const port = 5000

const app = express()

if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static('client/dist/build/spa'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
  })
}

// app.use(history())
// app.use(serveStatic(__dirname + '/dist/spa'))
// app.listen(3000)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));