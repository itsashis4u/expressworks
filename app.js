require('./db.js');


var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/', function(req, res) {
    res.end('Hello World!')
})

var port = process.argv[2] || 9000;

app.listen(port);

console.log("Listening at http://localhost:" + port);


app.post('/new', function(req, res){
	var from = req.params;
	console.log(from);
});