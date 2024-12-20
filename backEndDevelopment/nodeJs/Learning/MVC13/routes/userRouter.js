// Core Module
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

const homesController = require("../controllers/homes");

// first get middleware
userRouter.get("/", homesController.getHome);

module.exports = userRouter;