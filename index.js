
const express = require('express')
const port = 5000

const app = express()

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + 'client/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + 'client/public/index.html'));
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));