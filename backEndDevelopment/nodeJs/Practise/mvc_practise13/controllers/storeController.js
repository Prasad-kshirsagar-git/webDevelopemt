// const { registeredHomes } = require("../../dynamic_UI/routes/hostRouter");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => 
    res.render('store/index', {
      registeredHomes: registeredHomes, 
      pageTitle:'airbnb Home', 
      currentPage: 'index'
    })
  );
}

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => 
    res.render('store/home_list', {
      registeredHomes: registeredHomes, 
      pageTitle:'Home List', 
      currentPage: 'Home'
    })
  );
}

exports.getBookings = (req, res, next) => {
  res.render('store/booking', {
    pageTitle:'My Bookings', 
    currentPage: 'bookings'
  }) 
}

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => 
    res.render('store/favourite_list', {
      registeredHomes: registeredHomes, 
      pageTitle:'My Favourite', 
      currentPage: 'favourite_list'
    })
  );
}