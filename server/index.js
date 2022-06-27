import express from 'express'
import apiRoute from './api/index.js'

const app = express()

const port = process.env.PORT || 8800


app.use('/api', apiRoute)

app.listen(port, () => {
    console.log("backend is working....")
})

app.get("/", (req, res) => {
    res.send("hello world")
})