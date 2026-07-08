const express = require('express')
const {createlist, fetchlist,fetchlistID, updatelist} = require("../Controllers/dotolist")

const router = express.Router()

router.post('/create-list',createlist)
router.get('/fetch-list',fetchlist)
router.get ("/fetch-list/:userID",fetchlistID)
router.put("/update-Todolist/:userID",updatelist)
module.exports = router