/*

	Joseph Long
	CS 290, Web Development
	Spring 2017
	
	Homework Assignment: GET and POST checker

	Descirption:
	
		This is a single web application that will receive incoming POST and GET 
		requests.
		
		It will direct to the root page ("/") and display either a GET or POST along 
		with what is sent with the request.
		
		Per the homework instructions, I used the boilerplate code to generate the 
		express and handlebars code.
		

*/


var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5946);







/*
This is boilerplate code from the lecture used to 
render/display the GET request

I modified the output to display an Ordered Alphabetical List.

Example
============
Input:  http://flip3.engr.oregonstate.edu:5946/?firstName=Joseph&lastName=Long
Output will be:

GET Request Received:

A.  firstName: Joseph
B.  lastName: Long

*/
app.get('/',function(req,res){
  var qParams = [];
  for (var p in req.query){
    qParams.push({'name':p,'value':req.query[p]})
  }
  var context = {};
  context.dataList = qParams;
  res.render('get', context);
});


/*
This is boilerplate code from the lecture used to 
render/display the POST request.

I modified it to use an ordered/numbered list

Example:  
Input:  foo:bar, david:smith

output:

POST Request Received:

	1.  foo:bar
	2.  david:smith


*/
app.post('/', function(req,res){
  var qParams = [];
  for (var p in req.body){
    qParams.push({'name':p,'value':req.body[p]})
  }
  console.log(qParams);
  console.log(req.body);
  var context = {};
  context.dataList = qParams;
  res.render('post', context);
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
