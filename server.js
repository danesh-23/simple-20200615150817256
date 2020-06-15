const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const admin = require("firebase-admin")
const docRef = require("./api")

app.use(express.static(path.join(__dirname, "my-app/build")))
// app.use(bodyParser.json())
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "my-app/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "my-app/build/index.html"))
    })
}


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/my-app/build/index.html"))
})

app.get("/api", (req, res) => {
    let setAda = docRef.doc("alovelace").set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      })
            
      let setAlan = docRef.doc('aturing').set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
      })
      res.sendFile(path.join(__dirname, "my-app/build/index.html"))
})

app.get("/api/data", (req, res) => {
    res.json({ name: "Danesh Rajasolan" })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})