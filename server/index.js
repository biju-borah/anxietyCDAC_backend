const express = require("express")

const app = express()

const port = 8800

app.listen(port, () => {
    console.log("backend is working....")
})

app.get("/", (req, res) => {
    res.send("hello world")
})