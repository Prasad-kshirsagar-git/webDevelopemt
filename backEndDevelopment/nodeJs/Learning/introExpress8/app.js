// Core Modules
const http = require('http');

// External Module
const express = require('express');

// Local Module
const userRequestHandler = require('./users');

const app = express();

app.use("/",(req, res, next) => {
  console.log("Came in first middleware",req.url, req.method);
  next();
});

app.use("/submit-details",(req, res, next) => {
  console.log("Came in Second middleware",req.url, req.method);
  res.send("<p> Welcome to Home Page of Node Js</p>");
});

// const server = http.createServer(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

