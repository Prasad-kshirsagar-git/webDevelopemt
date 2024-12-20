// core modules
const fs = require('fs'); 
const path = require('path');
const rootDir = require('../utils/pathUtils');
const Favourite = require('./favourite');

// // fake database
// let registeredHomes = [];

const  homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home{
  constructor(houseName, price, location, rating, photoUrl){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {

      if(this.id) {   // this is edit home case

        registeredHomes = registeredHomes.map (home =>
          home.id === this.id ? this : home)

        // registeredHomes = registeredHomes.map(home => {
        //   if(home.id === this.id) {
        //     return this;
        //   }
        //   return home;
        // })

      } else {    // this is add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log("File Writing Successfully", error);
      });
    });
  }

  static fetchAll (callback){
    // const  homeDataPath = path.join(rootDir, 'data', 'homes.json');

    fs.readFile(homeDataPath, (err, data) => {
      // console.log("file read : ",err, data);

      callback(!err ? JSON.parse(data) : []);

    //   if (!err) {
    //    callback(JSON.parse(data));
    //   } else {
    //     callbackify([]);
    //   }
    });
  };

  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId);
      callback(homeFound);
    })
  }

  static deleteById(homeId, callback) {
    this.fetchAll(homes => {
      homes = homes.filter (home => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
        Favourite.deleteById(homeId, callback);
      });
    })
  }
}