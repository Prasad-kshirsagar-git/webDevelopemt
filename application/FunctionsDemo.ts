// Function defination
function fun()          // 1
{
    console.log("Inside fun");
}

// Function call
fun();      

function gun(no : number)       // 2
{
    console.log("Inside gun : "+no);
}

gun(11);

function sun(no : number) : number      // 3
{
    var i : number = no;    // Local variables
    i++;
    return i;
}

var ret : number = 0;
var a : number = 10;
ret = sun(a);
console.log("Return value is  : "+ret);


// tsc FunctionsDemo.ts             // Step 1 (Transpile .ts to .js)
// node FunctionsDemo.js        // Step 2 (Execute .js)