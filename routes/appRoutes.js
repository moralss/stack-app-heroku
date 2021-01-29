const appRoutes = (app) => {
  app.get("/api/car", (req, res) => {
    res.send("hello world")
  })
}


module.exports = { appRoutes }