require('./db.js');


var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path')
// app.set('views', path.join(__dirname, '/'))

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res) {
    res.end('Hello World!')
})


app.get('/users', function(req, res) {
    res.end('Hello World!')
})

var port = process.argv[2] || 9000;

app.listen(port);

console.log("Listening at http://localhost:" + port);


app.post('/', function(req, res, next){
	
});
