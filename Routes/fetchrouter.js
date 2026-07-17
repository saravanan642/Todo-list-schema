const express = require('express')
const router = express.Router();

const{createfetchdata, fetchformdata, deleteform} = require("../Controllers/frontfetchdata");
router.post("/create-form", createfetchdata);
router.get('/fetch-formdata', fetchformdata);
router.delete("/delete-user/:id", deleteform);

module.exports = router