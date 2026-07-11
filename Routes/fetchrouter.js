const express = require('express')
const router = express.Router();

const{createfetchdata} = require("../Controllers/frontfetchdata");
router.post("/create-form", createfetchdata);

module.exports = router