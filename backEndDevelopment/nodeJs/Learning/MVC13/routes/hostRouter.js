// Core Module
// const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
// const rootDir = require("../utils/pathUtils");

// const {getAddHome} = require("../controllers/homes");
// hostRouter.get("/add-home",getAddHome);

const homesController = require("../controllers/homes");
hostRouter.get("/add-home",homesController.getAddHome);

hostRouter.post("/add-home",homesController.postAddHome);

// module.exports = hostRouter;
exports.hostRouter = hostRouter;


