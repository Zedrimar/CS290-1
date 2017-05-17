var myObj = {
	
	"foo" : "Value",
	"age" : 30,
	"address" : {
		"street" : "123 jS",
		"city" : "JS"
		"pincode" : 12345
	}


};

var emp1 = {};

emp1.firstName = "Michael";
emp1.lastName = "Scott";
emp1.gender = "M";
emp1.designation = "Regional Manager";

var emp2 = {};

emp2.firstName = "Dwight";
emp2.lastName = "Schrute";
emp2.gender = "M";
emp2.designation = "Assistant Regional Manager";


function createEmployeeObject(firstName,lastName, gender, designation)
{
	var newObject = {};
		newObject.firstName = firstName;
		newObject.lastName = lastName;
		newObject.gender = gender;
		newObject.designation = designation;
}

var emp3 = createEmployeeObject("Jim", "Halpert", "M", "Sales Representative");



