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


<<<<<<< HEAD
app.post('/new', function(req, res){
	var from = req.params;
	console.log(from);
});
=======
app.post('/', function(req, res, next){
	
});
>>>>>>> bcd71b3806aa6d04bd28e33fd875310f007d0d4d
