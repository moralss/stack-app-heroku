const express = require("express");
const app = express();

const decodeIDToken = require('./admin')

const PORT = 3003;

app.get('/', decodeIDToken, async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    console.log("auth", auth)
    return
  }


  return res.status(403).send('Not authorized');
});

if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));