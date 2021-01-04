
var admin = require("firebase-admin");

var serviceAccount = require("./buget-app-411e3-firebase-adminsdk-7feab-d79a28ebef.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://buget-app-411e3.firebaseio.com"
});


async function decodeIDToken(req, res, next) {
  const header = req.headers.authorization;
  if (header !== 'Bearer null') {

    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      console.log(idToken)
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log(err);
    }
  }

  next();
}

module.exports = decodeIDToken;