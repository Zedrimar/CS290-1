//Activity 3...


var deepEqual = function ( a, b ) 
{

  //Test 1:  Check to see if a & b are not null...
  if ( a == null && b == null )
  {
  		return false;
  }	

  //Test 2:  Dismiss if number of keys are not equal...
  if ( Object.keys(a).length != Object.keys(b).length )
  {
  		return false;
  }

  //Test 3: Check to see if a & b are objects.....	
  if ( (typeof a == "object" ) && (typeof b == "object" ) ) 
  {

  	//iterate through properties in object "a"  
  	//and check to see if same property is in "b". 
    for (var prop in a) 
    {

      //Test 4:Check to see if property is in object b 
      //dismiss if not present...
      if ( b.hasOwnProperty(prop) == false )
      {  
      		return false
      }
      
      //property is in b, recursivelly call deepEqual
      else
      {
        	//Test 5:  Recursive call...Return false if object property
        	//fails deepEqual tests
        	if ( deepEqual(a[prop], b[prop]) == false )
        	{
          		return false;
      		}
      }
    }

    //return true if passed all tests in for-in iteration...
    return true;
  }

  //Test6: Check to see if a is not equal to b and 
  //dismiss using strict comparison
  else if (a === b)
  {	
    	return true;
  }

  //Return false if not strictly equal . 
  else
  {	
    	return false;
  }  
}


//test function...
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));  									//true
console.log(deepEqual(obj, {here: 1, object: 2}));  				//false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));			//true

