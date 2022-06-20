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
    res.status(200).json({ "count": check.length })

})

export default router;