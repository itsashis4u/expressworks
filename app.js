var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path')
var bodyParser = require('body-parser')
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


// app.set('views', path.join(__dirname, '/'))

app.use(express.static(path.join(__dirname, '/')));

app.use('/', multipartMiddleware);

app.get('/', function(req, res) {
    res.end('Hello World!')
})


app.get('/users', function(req, res) {
    res.end('Hello World!')
})

var port = process.argv[2] || 9000;

app.listen(port);

console.log("Listening at http://localhost:" + port);





mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Success");
});

var Schema = mongoose.Schema({
	username : String,
	FullName : String
});

var userData = mongoose.model('User', Schema);

var person_data = {
    username: "",
    FullName: ""
};

app.post('/', function(req, res){
	console.log(req.body.username+ " "+req.body.FullName);
	var person_data = {
    username: req.body.username,
    FullName: req.body.FullName
};
	res.send("Thank You");
	
});

var person = new userData(person_data);

person.save();
