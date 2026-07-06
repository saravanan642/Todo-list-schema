const express = require('express')
const {createlist, fetchlist,fetchlistID} = require("../Controllers/dotolist")

const router = express.Router()

router.post('/create-list',createlist)
router.get('/fetch-list',fetchlist)
router.get ("/fetch-list/:userID",fetchlistID)
module.exports = router