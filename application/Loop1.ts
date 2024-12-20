
// Loop : for , while , do-while


function Sequance() : void
{
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}
function Iteration_For() : void
{
        var i : number = 0;
        for(i = 1; i <= 5; i++)
        {
            console.log("Hello");
        }
}
function Iteration_While() : void
{
    var i : number = 1;
    while(i <= 5)
    {
            console.log("Hello");
            i++;
    }
}
Sequance();
Iteration_For();
Iteration_While()