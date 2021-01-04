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


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));