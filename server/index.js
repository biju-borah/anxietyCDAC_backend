import express from 'express'
import apiRoute from './api/index.js'

const app = express()

const port = process.env.PORT || 3030


app.use('/api', apiRoute)

app.listen(port, () => {
    console.log("backend is working....")
})

app.post('/login', (req, res) => {
    const { usrename, passworrd } = req.body
    const user = { username, password };
    res.send({ user })
})

app.get("/", (req, res) => {
    res.send("hello world")
})