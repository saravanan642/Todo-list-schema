const express = require('express')
const router = express.Router()

const dotolist = require('./listRouter')
const fetchdata =require("./fetchrouter")
router.use(dotolist)
router.use(fetchdata)

module.exports = router;