const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(4000, function() {
    console.log("Servidor rodando =)")
})


app.get("/", function(req, res) {
    res.send("Olá, mundo.")
})