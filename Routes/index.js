const express = require('express')
const router = express.Router()

const dotolist = require('./listRouter')

router.use(dotolist)

module.exports = router;