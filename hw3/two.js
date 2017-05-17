function toTheN(n)
{    
    return  function(x) 
    {

        return Math.pow(x,n);
    };
}

var square = toTheN(2);
var toThe3rd = toTheN(3);

console.log(square(2));
console.log(toThe3rd(2));

