const admin = require("firebase-admin")

var serviceAccount = require("./ServiceAccKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://web-react-node.firebaseio.com"
})

let db = admin.firestore()

let docRef = db.collection('users')

module.exports = docRef
