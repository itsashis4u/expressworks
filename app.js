var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/', function(req, res) {
    res.end('Hello World!')
})

var port = 9000;

app.listen(process.argv[2] || port);
if (process.argv[2] === undefined)
    console.log("Listening at http://localhost:" + port);
else
    console.log("Listening at http://localhost:" + process.argv[2]);
