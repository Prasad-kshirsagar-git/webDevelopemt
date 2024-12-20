// Function defination
function fun() {
    console.log("Inside fun");
}
// Function call
fun();
function gun(no) {
    console.log("Inside gun : " + no);
}
gun(11);
function sun(no) {
    var i = no; // Local variables
    i++;
    return i;
}
var ret = 0;
var a = 10;
ret = sun(a);
console.log("Return value is  : " + ret);
