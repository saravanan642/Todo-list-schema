const express = require('express')
const router = express.Router();

const{createfetchdata, fetchformdata} = require("../Controllers/frontfetchdata");
router.post("/create-form", createfetchdata);
router.get('/fetch-formdata', fetchformdata)

module.exports = router