// Core Module
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
// const rootDir = require("../utils/pathUtils");
const { registeredHomes } = require('./hostRouter');

// first get middleware
userRouter.get("/",(req, res, next) => {
  console.log(registeredHomes);
  //res.sendFile(path.join(rootDir, 'views','home.html'));
  res.render('home',{registeredHomes: registeredHomes, pageTitle:'airbnb Home'});
});

module.exports = userRouter;