const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000

const app = express()
const path = require('path');
const { appRoutes } = require("./routes/appRoutes");

appRoutes(app)
if (process.env.NODE_ENV === "production") {


  app.use(express.static(__dirname + 'client/dist/spa'));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist/spa", "index.html"))
  })
}


app.listen(port, () => {
  console.log("server running")
})


