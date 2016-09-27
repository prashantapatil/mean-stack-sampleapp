var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Client = new Schema({

	clientNo: String,
	firstName: String,
	lastName: String


});
var Client = mongoose.model('Client', Client);
module.exports=Client;