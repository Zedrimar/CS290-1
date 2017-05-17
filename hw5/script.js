/*
    Joseph Long
  CS 290:  Web Development, Spring 2017
  HW Assignment:  DOM and Events
  
  Note:  References Used:
  
  1)  Traversing an HTML table with JavaScript and DOM Interfaces
        Mozilla Developer Network
      http://tinyurl.com/n4dgdxq
  
    2)  Breaking out of a function ( building a sentinel )
        http://tinyurl.com/m9hyu88

*/

// get the reference for the body
var body = document.getElementsByTagName("body")[0];

// Create Table and body elements...
table = document.createElement("table");
tbody = document.createElement("tbody");


// creating all cells
for (var j = 0; j < 4; j++) {

  if (j == 0) {
    //create the header row..
    currentRow = document.createElement("thead");

    for (var m = 0; m < 4; m++) {
      //create a table header cell...
      currentCell = document.createElement("th");

      //populate text...
      currentCell.textContent = "Header: " + (m + 1);

      //set border deep black
      currentCell.style.border = "2px solid black";

      //append cell to thead..
      tbody.appendChild(currentCell);

    }

    //append the header row to the table body...
    tbody.appendChild(currentRow);

  } //end if
  else {
    // creates a table row element
    currentRow = document.createElement("tr");

    for (var i = 0; i < 4; i++) {


      // creates a cell
      currentCell = document.createElement("td");

      // creates a Text Node
      currentCell.textContent = "(" + (i+1) + "," + (j) + ")";

      //add formatting to its border for Aesthetics ..
      currentCell.style.border = "thin solid black";

      // appends the cell into the row 
      currentRow.appendChild(currentCell);

    }
    tbody.appendChild(currentRow);
  } //end else...



}

// append body to table (its parent)
table.appendChild(tbody);


// append table to body ( its parent )
body.appendChild(table);


// sets the border attribute of table to 2;
table.setAttribute("border", "1");


//Capture the references to parent elements
body = document.getElementsByTagName("body")[0];
table = body.getElementsByTagName("table")[0];
tbody = table.getElementsByTagName("tbody")[0];

//Capture First Row
myrow = tbody.getElementsByTagName("tr")[0];

//Capture first cell ( upper left cor)
mycel = myrow.getElementsByTagName("td")[0];

//set currentRow to myRow for reference/toggling rows..
var currentRow = myrow;

//Capture the first Cell..
var currentPosition = myrow.firstElementChild;

//set the border thick...
currentPosition.style.border = "3px solid black";


//Create a Column Tracker and Row Tracker
var col = 0;
var row = 0;

//Create Left Button...  
var left = document.createElement("button");
var l = document.createTextNode("Left");
left.appendChild(l);
body.appendChild(left);

//test event handler        
left.addEventListener("click", function() {


  //edge sentinel
  if (col == 0) {
    return;
  }

  //set current position and update its border format...
  currentPosition = currentPosition.previousElementSibling;
  currentPosition.style.border = "3px solid black";

  //reset formatting on former current position...
  post = currentPosition.nextElementSibling;
  post.style.border = "thin solid black";

  //decrement col tracker..
  col--;
});




//Create Right Button...
var right = document.createElement("button");
var r = document.createTextNode("Right");
right.appendChild(r);
body.appendChild(right);

//test event handler        
right.addEventListener("click", function() {

  //edge sentinel
  if (col == 3) {
    return;
  }


  //set current position and update its border format...
  currentPosition = currentPosition.nextElementSibling;
  currentPosition.style.border = "3px solid black";

  //reset formatting on former current position...
  pre = currentPosition.previousElementSibling;
  pre.style.border = "thin solid black";

  //Increment col tracker
  col++;

});


//Create up Button...  
var up = document.createElement("button");
var u = document.createTextNode("Up");
up.appendChild(u);
body.appendChild(up);

//test event handler        
up.addEventListener("click", function() {


    //edge sentinel
  if (row == 0) {
    return;
  }

  //move up one row...
  currentRow = currentRow.previousElementSibling;

  //capture and toggle to appropriate cell...
  //capture child element in current row.
  var toggleChild = currentRow.firstElementChild;
  for (var l = 0; l < col; l++) {
    toggleChild = toggleChild.nextElementSibling;
  }

  toggleChild.style.border = "3px solid black";


  //capture current position
  pre = currentPosition;
  currentPosition.style.border = "thin solid black";

  //reassign current position
  currentPosition = toggleChild;

  //decrement row
  row--;

});


//Create down Button...  
var down = document.createElement("button");
var d = document.createTextNode("Down");
down.appendChild(d);
body.appendChild(down);

//test event handler        
down.addEventListener("click", function() {


  //set a setinel from falling off the edge of the last row...
  if (row == 3) {
    return;
  }


  //move up one row...
  currentRow = currentRow.nextElementSibling;

  //capture and toggle to appropriate cell...
  //capture child element in current row.
  var toggleChild = currentRow.firstElementChild;
  for (var l = 0; l < col; l++) {
    toggleChild = toggleChild.nextElementSibling;
  }

  //set the border on the new selected 
  toggleChild.style.border = "3px solid black";


  //capture current position
  pre = currentPosition;
  currentPosition.style.border = "thin solid black";

  //reassign current position
  currentPosition = toggleChild;

  //increment row
  row++;

});

//Create mark Button...  
var mark = document.createElement("button");
var m = document.createTextNode("Mark Cell");
mark.appendChild(m);
body.appendChild(mark);

//test event handler        
mark.addEventListener("click", function() {

  currentPosition.style.background = "yellow";

});





/*
Test code:  Code I ran before I built my button functions to 
practice traversing the dom tree
*/


//simulate down...
/*
for ( var i = 0 ; i < 3 ; i++)
{
        currentRow=currentRow.nextElementSibling;
}
currentRow.style.background = "green";

//capture child element in current row.
var toggleChild = currentRow.firstElementChild;
for ( var l = 0 ; l < 2 ; l++)
{
        toggleChild = toggleChild.nextElementSibling;
}

toggleChild.style.border = "thick solid black";
*/

//Test Code...navigating rows...


/*


currentRow.firstElementChild.style.background = "cyan";
currentRow = currentRow.nextElementSibling.firstElementChild;
currentRow.style.background = "green";
currentRow = currentRow.nextElementSibling;
currentRow.style.background = "pink";
*/



/*
firstCell = currentRow.firstElementChild;
firstCell.style.background = "green";

for (var i = 1; i < 3; i++) {
  firstCell = firstCell.nextElementSibling;
  //firstCell.style.background = "pink";
}

//firstCell.style.background = "pink";
//currentRow = currentRow.nextElementSibling;
//currentRow.style.background = "yellow";

for (var k = 0 ; k < 3 ; k++ )
{
    var secondRow = currentRow.nextElementSibling;
    secondRow.style.background = "pink";
}
    secondRow = secondRow.previousElementSibling;
    
    
*/
//secondRow.style.background = "orange";




/*
myrow = myrow.firstElementChild;
myrow.style.background = "cyan";  

myrow = myrow.nextElementSibling;
myrow.style.background = "pink";        
        
myrow = myrow.nextElementSibling;
myrow.style.background = "orange";
*/


//mycel.style.background = "cyan";
//mycel.setAttribute("border","4");
//mycel.style.border = "thick solid #0000FF";


/*
  //capture currentPosition
  var changeMe = currentPosition;
  var change = currentRow.firstElementChild;


  //capture first cell in previous row..
  var cell = currentRow.previousElementSibling.firstChildElement;

  //firstCell = currentRow.firstElementChild;

  //set the current sibling...
  currentRow = currentRow.previousElementSibling;

  for (var i = 0; i < 2; i++) {
    cell = cell.nextElementSibling;

  }
  cell.style.background = "cyan";
  */

/*
    //currentRow.firstElementChild.style.border = "thick solid black";
  change.firstElementChild.style.border = "thick solid black";
  
  //revert back current cell which is now a previous cell
  changeMe.style.border = "thin solid black";
  
  //update current position
  currentPosition = currentRow.firstElementChild;
  
  
  // first item element of the childNodes list of mycel//
//myceltext = mycel.childNodes[0];

//Capture first row.


// content of currentText is the data content of myceltext
//currentText = document.createTextNode(myceltext.data);
//body.appendChild(currentText);



//Capture current row..
//var currentRow = tbody.firstElementChild;
  
  */
