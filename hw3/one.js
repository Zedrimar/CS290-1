function toTheN(n)
{
    return function(x)
    {
        return Math.pow(x,n);
    };
}



var square = toTheN(2);
var toThe3rd = toTheN(3);

console.log(toTheN(2));





// function forE(a, work) {
//     for (var i = 0; i < a.length; i++) {
//         work(a[i]);
//     }
// }

// var arr = [1, 2, 3];

// // function appendOut(val) {
// //     document.getElementById("output").textContent += " " + val;
// // }

// // forE(arr,appendOut);

// function wrapLog(val) {
//     console.log(val);
// }

// forE(arr,wrapLog);






// var array = [1,2,3];



// //higher order function can do the work more faster...
// //forEach(array, work);

// //print to the console
// //forEach(array, console.log);
// array.forEach(console.log);



// /*
// Whats going on here is that "i" is changing as the for
// loop is executing, keeping its value as the call keeps
// going....at the end of the call, i is 3...there are 
// three functions in the array fnArr, however they all
// reference where i was left off.  i follows along...
// */
// function generateFunctionList(){
//     var fnArr = [];
//     for( var i = 0; i < 3; i++){
//         fnArr[i] = function(){
//             console.log(i);
//     	};
//     }
//     return fnArr;
// }

// var functionArray = generateFunctionList();
// functionArray[0](); //Expect 0?
// functionArray[1](); //Expect 1?
// functionArray[2](); //Expect 2?

// /*//////// Fixing the problem.....////////////*/



// function generateFunctionList()
// {
//     var fnArr = [];
//     for( var i = 0; i < 3; i++)
//     {
//         fnArr[i] = function(x)
//         {
//             return function()
//             {
//                 console.log(x);
//             };
//     	}(i);
//     }
//     return fnArr;
// }

// fnArr[i] = function(x){ return function(){ console.log(x); }; (i); }

// var functionArray = generateFunctionList();
// functionArray[0](); //Expect 0?
// functionArray[1](); //Expect 1?
// functionArray[2](); //Expect 2?

