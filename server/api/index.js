import express from 'express'

const router = express.Router();

router.post('/spellCheck', (req, res) => {
    res.send('api')
})

export default router;