require("dotenv").config({ quiet: true });

const express = require("express");
const port = require("./config/listen")
const moongoose = require("mongoose")
const Database =require("./config/db")

const app = express();
app.use(express.json());
port(app);
Database(moongoose);

