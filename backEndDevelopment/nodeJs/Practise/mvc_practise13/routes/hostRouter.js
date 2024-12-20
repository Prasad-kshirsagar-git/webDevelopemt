// Core Module
// const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
// const rootDir = require("../utils/pathUtils");

// const {getAddHome} = require("../controllers/homes");
// hostRouter.get("/add-home",getAddHome);

const hostController = require("../controllers/hostController");
hostRouter.get("/add-home",hostController.getAddHome);

hostRouter.post("/add-home",hostController.postAddHome);

hostRouter.get("/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;
// exports.hostRouter = hostRouter;


