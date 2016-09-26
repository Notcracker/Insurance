var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var	assert = require('assert');

var task = express.Router();

task.use(bodyParser.json());
task.route('/')
.get(function (req,res,next){
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = task;