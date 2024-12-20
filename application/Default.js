// Default arguments 
// Number of default argumensts are 2
// Default arguments should be trailing (From right to left)
function Demo(no1, no2, no3) {
    if (no2 === void 0) { no2 = 20; }
    if (no3 === void 0) { no3 = 30; }
    console.log("Inside Demo");
}
// Demo();              Error
Demo(10); // no1 = 10, no2 = 20 , no3 = 30
Demo(10, 11); // no1 = 10, no2 = 11, no3 = 30
Demo(10, 11, 12); // no1 = 10, no2 = 11, no3 = 12     
