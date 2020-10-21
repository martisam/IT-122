//add modules to the app
var express = require('express');
var path = require('path'); //path is a root module which so it does not need to be added in the dependencies
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// Intialize the app
var app = express();

//setup jade views. This tells jade which folder the template files will be in
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Set the body parser
app.use(bodyParser.json()); // Parse json
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

//setup a route to 
app.get('/', function(req, res){
   // console.log("Here");
   //res.send('<h1>Hello World</h1>');
   res.render('index')
});

app.listen(3000);
console.log('Server runnin on port 3000');
