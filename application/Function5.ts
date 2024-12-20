function main() : void
{
    var no : number = 12;
    var bret : boolean;
    
    bret = CheckEven(no);   // CheckEven(12)
    if(bret == true)
    {
        console.log("It is even number");
    }    
    else
    {
        console.log("It is odd number");
    }
}

function CheckEven(Value : number): boolean
{
    if((Value % 2) == 0)        // jar 
    {
        return true;
    }
    else            // nahitar
    {
        return false;
    }
}
main();