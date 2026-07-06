require("dotenv").config({ quiet: true });

const express = require("express");
const port = require("./config/listen")
const moongoose = require("mongoose")
const Database =require("./config/db")

const app = express();

port(app);
Database(moongoose);

