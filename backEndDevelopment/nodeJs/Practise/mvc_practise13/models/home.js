// core modules
const fs = require('fs'); 
const path = require('path');
const rootDir = require('../utils/pathUtils');

// // fake database
// let registeredHomes = [];

module.exports = class Home{
  constructor(houseName, price, location, rating, photo){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const  homeDataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log("File Writing Successfully", error);
      });
    });
  }

  static fetchAll (callback){
    const  filePath = path.join(rootDir, 'data', 'homes.json');

    fs.readFile(filePath, (err, data) => {
      // console.log("file read : ",err, data);

      callback(!err ? JSON.parse(data) : []);

    //   if (!err) {
    //    callback(JSON.parse(data));
    //   } else {
    //     callbackify([]);
    //   }
    });

  }
}