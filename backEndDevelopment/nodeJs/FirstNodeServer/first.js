const fs = require('fs');
console.log("welcome");

fs.writeFile("output.txt","writing file", (err) => {
  if(err) console.log("error occure");
  else console.log("File written Successfully");
})


/*
require cammand for install dependency

1: npm init -y    // for new project start
2: npm install express --save
3: npm install
4: npm install body-parser  // to get body of req

*/