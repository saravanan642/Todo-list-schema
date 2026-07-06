const express = require('express')
const createlist = require("../Controllers/dotolist")

const router = express.Router()

router.post('/create-list',createlist)

module.exports = router