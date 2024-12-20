// const { registeredHomes } = require("../../dynamic_UI/routes/hostRouter");
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views','addHome.html'));
  res.render('addHome',{
    pageTitle: 'Add home to Airbnb', currentPage:'addHome'});
};
// exports.getAddHome = getAddHome;

exports.postAddHome = (req, res, next) => {
  console.log('home registration successful for: ', req.body);

  const{houseName, price, location, rating, photo} = req.body;

  const home = new Home(houseName, price, location, rating, photo);

  // const home = new Home(req.body.houseName,req.body.price,req.body.location,req.body.rating, req.body.photoUrl);

  home.save();

  // res.sendFile(path.join(rootDir, 'views','homeAdded.html'));
  res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded' });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => 
    res.render('home', {
      registeredHomes: registeredHomes, 
      pageTitle:'airbnb Home', 
      currentPage: 'Home'
    })
  );
}
