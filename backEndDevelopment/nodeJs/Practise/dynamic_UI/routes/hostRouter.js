// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home",(req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views','addHome.html'));
  res.render('addHome',{pageTitle: 'Add home to Airbnb', currentPage:'addHome'});
});

const registeredHomes = [];

hostRouter.post("/add-home",(req, res, next) => {
  console.log('home registration successful for: ', req.body);
  registeredHomes.push(req.body);

  // res.sendFile(path.join(rootDir, 'views','homeAdded.html'));
  res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' });
});

// module.exports = hostRouter;
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

