var Ret : number = 0;

// Regular function
function Addition1(No1 : number, No2 : number) : number
{
        var Ans : number = 0;
        Ans = No1 + No2;
        return Ans;
}

Ret = Addition1(10,11);
console.log("Addition is : "+ Ret);

// Anonymous Function (Function without name)
var Addition2 = function(No1 : number, No2 : number) : number
{
        var Ans : number = 0;
        Ans = No1 + No2;
        return Ans;     
}

Ret = Addition2(10,11);
console.log("Addition is : "+ Ret);

// Fat arrow / Lambda / Arraow function
var Addition3 = (No1 : number, No2 : number) : number =>
{
        var Ans : number = 0;
        Ans = No1 + No2;
        return Ans;  
}

Ret = Addition3(10,11);
console.log("Addition is : "+ Ret);