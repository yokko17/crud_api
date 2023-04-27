import express from "express"
const PORT = 3000
const app = express()

app.get('/*', (req, res) => {
    res.status(200).json("Ciao mondo!")
})

app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT))