var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var config = require('./config/config.js');

// mongoose.connect(config.mongo.uri, config.mongo.options);

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

var server = app.listen(config.port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

app.use(express.static(path.join(__dirname, '../client')));
