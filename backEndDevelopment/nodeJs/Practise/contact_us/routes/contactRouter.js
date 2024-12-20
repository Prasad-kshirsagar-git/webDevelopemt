// Core Module
const path = require('path');

// External Module
const express = require('express');

// Local Module
const rootDir = require('../utils/pathUtils');

const contactRouter = express.Router();

contactRouter.get("/contact_us",(req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact_us.html"))
});

contactRouter.post("/contact_us",(req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactsuccess.html"))
});


// homeRouter.get("/",(req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "home.html"))
// });

module.exports = contactRouter;