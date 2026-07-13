const express = require('express')
const {createlist, fetchlist,fetchlistID, updatelist, Deletelist} = require("../Controllers/dotolist")

const router = express.Router()

router.post('/create-list',createlist)
router.get('/fetch-list',fetchlist)
router.get ("/fetch-list/:userID",fetchlistID)
router.put("/update-Todolist/:userID",updatelist)
router.delete("/delete-Todolist/:userID",Deletelist)


module.exports = router