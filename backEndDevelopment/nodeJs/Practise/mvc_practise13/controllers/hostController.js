// const { registeredHomes } = require("../../dynamic_UI/routes/hostRouter");
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views','addHome.html'));
  res.render('host/add_Home',{
    pageTitle: 'Add home to Airbnb', currentPage:'addHome'});
};
// exports.getAddHome = getAddHome;

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => 
    res.render('host/host_home_list', {
      registeredHomes: registeredHomes, 
      pageTitle:'host Home List', 
      currentPage:'host_homes'
    })
  );
}

exports.postAddHome = (req, res, next) => {
  console.log('home registration successful for: ', req.body);

  const{houseName, price, location, rating, photo} = req.body;

  const home = new Home(houseName, price, location, rating, photo);

  // const home = new Home(req.body.houseName,req.body.price,req.body.location,req.body.rating, req.body.photoUrl);

  home.save();

  // res.sendFile(path.join(rootDir, 'views','homeAdded.html'));
  res.render('host/home_Added', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' });
};
