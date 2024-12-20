// const { registeredHomes } = require("../../dynamic_UI/routes/hostRouter");
const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render('store/index', {
      registeredHomes: registeredHomes, 
      pageTitle:'airbnb Home', 
      currentPage: 'index'
    })
  });
}

exports.getHome = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => {
    res.render('store/home_list', {
      registeredHomes: registeredHomes, 
      pageTitle:'Home List', 
      currentPage: 'Home'
    })
  });
}

exports.getBookings = (req, res, next) => {
  res.render('store/booking', {
    pageTitle:'My Bookings', 
    currentPage: 'bookings'
  }) 
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites =>{
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render('store/favourite_list', {
        favouriteHomes: favouriteHomes, 
        pageTitle:'My Favourite', 
        currentPage: 'favourite_list'
      })
    });
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home details page", homeId);

  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    
    if(!home) {
      console.log("Home Not found")
      res.redirect("/homes");
    } else {
      res.render('store/home_details', {
        home:home,
        pageTitle:'Home Details', 
        currentPage: 'Home'
      });
    }
  })
}

exports.postAddToFavourite = (req, res, next) => {
  // console.log("Came to Add to favourite",req.body);
  Favourite.addToFavourite(req.body.id, error => {
    if(error) {
      console.log("Error while marking favourite", error);
    }
    res.redirect("/favourites");
  })
}

exports.postRemoveFromFavourite = (req, res, next) => {

  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, error => {
    if(error) {
      console.log("Error While Removing from favourite", error);
    }

    res.redirect("/favourites");
  })

}