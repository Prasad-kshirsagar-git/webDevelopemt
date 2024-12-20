// Core Module
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

const homesController = require("../controllers/storeController");

// first get middleware
storeRouter.get("/", homesController.getIndex);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/homes", homesController.getHome);
storeRouter.get("/favourites", homesController.getFavouriteList);

module.exports = storeRouter;
