var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

app.set('port', process.env.port || 9000);
app.set('views', __dirname + '/views');

// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
app.use(express.static(path.join(__dirname, '/')));

mongoose.connect('mongodb://localhost/company');
var Schema = mongoose.Schema({
	username : String,
	password : String
});

var user = mongoose.model('emp', Schema);
 
app.post('/new', function(req, res){
	new user({
		username: req.body.username,
		password  : req.body.password				
	}).save(function(err, doc){
		if(err) res.json(err);
		else    res.send('Successfully inserted!');
	});
});
 
 
 
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});