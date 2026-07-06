const express = require('express')
const {createlist, fetchlist} = require("../Controllers/dotolist")

const router = express.Router()

router.post('/create-list',createlist)
router.get('/fetch-list',fetchlist)
module.exports = router