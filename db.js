var mongoose = require('mongoose');
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

