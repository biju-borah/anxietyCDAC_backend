import express from 'express'
import bodyParser from 'body-parser'
import spell from 'spell-checker-js'

spell.load('en')

// Checking text
//const check = spell.check('Some text to check, biju, borah')

// create application/json parser
var jsonParser = bodyParser.json()

const router = express.Router();

router.post('/spellCheck', jsonParser, (req, res) => {
    const sum = req.body.summary
    console.log(sum)
    const check = spell.check(sum)
    console.log(check)
    res.status(200).json({ "Misspelled count": check.length })

})

router.post('/typeSpeed', jsonParser, (req, res) => {

    const keystroke = 5

    const time = req.body.time
    const sum = req.body.summary

    var words = sum.split(" ")

    var count = sum.length

    var type_speed = count / time * 60 * keystroke

    res.status(200).json({ "words": words.length, "typeSpeed": type_speed })
})


export default router;