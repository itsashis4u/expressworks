var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path')
var bodyParser = require('body-parser')
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var formPage = "/";  //Link of page which contains the form

// app.set('views', path.join(__dirname, '/'))

app.use(express.static(path.join(__dirname, '/')));

app.use(formPage, multipartMiddleware);

app.get('/', function(req, res) {
    res.end('Hello World!')
})

//used for data communication using GET method
app.get('/users', function(req, res) {
    res.end('Hello World!')
})

var port = process.argv[2] || 9000;

app.listen(port);

console.log("Listening at http://localhost:" + port);

//Connect to MongoDb
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Success");
});

//Create a schema
var Schema = mongoose.Schema({
	username : String,
	FullName : String
});

console.log("Schema Created");
//Create a model using the schema
var userData = mongoose.model('User', Schema);

//Function which accepts the data and saves it to the DB
var saveToDb = function(person_data){
	var person = new userData(person_data);
	person.save();
	console.log("Successfully stored data in db!!");
	console.log(person_data);	
};

//Recieve data from page using POST method
app.post(formPage, function(req, res){
	console.log(req.body.username+ " "+req.body.FullName);
	person_data = {
	    username: req.body.username,
	    FullName: req.body.FullName
	};
	res.send("Your Data is recorded... Thank You!!\n"+"username: "+req.body.username + "\nFullName: "+ req.body.FullName);
	saveToDb(person_data);
	
});

