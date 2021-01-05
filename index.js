const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000

const app = express()


if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static('client/dist/spa'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist/spa", "index.html"))
  })
}


// app.use(history())
// app.use(serveStatic(__dirname + 'client/dist/spa'))
app.listen(port)