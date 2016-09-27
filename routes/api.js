var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/client.js');

router.get('/', function(req, res){
	res.send('CMS APIs');
});

router.get('/clients', function(req, res){
	
	return Client.find(function(err, clients){

		if(!err){

			return res.send(clients);

		} else {

			return res.send(500, err);
		}
	});
});

router.post('/clients/add', function(req, res){

	var client = new Client({

		clientNo: req.body.clientNo,
		firstName: req.body.firstName,
		lastName: req.body.lastName

	});

	client.save(function(err){

		if(!err){
			return res.send(200, client);

		} else {
			return res.send(500, err);
		}
	});
});


router.post('/clients/update', function(req, res){

	var id = req.body._id;

	var client = new Client({

		clientNo: req.body.clientNo,
		firstName: req.body.firstName,
		lastName: req.body.lastName

	});

	Client.update({
		_id:id
	},{
		$set: {
			clientNo: req.body.clientNo,
			firstName: req.body.firstName,
			lastName: req.body.lastName
		}
	}).exec();
	return res.send('Client data updated successfully');
});

router.get('/clients/delete/:id', function(req, res){
	
	var id = req.params.id;

	Client.remove({
		_id: id

	}, function(err){
		return console.log(err);
	});

	return res.send('Client has been deleted successfully');

});

router.get('/clients/:id', function(req, res){
	
	var id = req.params.id;

	Client.findOne({
		_id: id

	}, function(err, client){
		if(err)
			return console.log(err);

		return res.send(client);
	});

});


module.exports = router;
