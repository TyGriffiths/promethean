
var serverPort = 8001;
var dbPort = 20000;

(function(serverPort, dbPort){

  var express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      db = mongoose.connect('mongodb://localhost:' +  dbPort);


  // parse application/x-www-form-urlencoded 
  app.use(bodyParser.urlencoded({ extended: false }));
   
  // parse application/json 
  app.use(bodyParser.json());

  //client requests
  require('./client_requests/static_files')(app, express);
  require('./client_requests/rest_api')(app, mongoose, db);

  //run app

  app.listen(serverPort, function(){
    console.log('listening on port %s', serverPort);
  })



})(serverPort, dbPort);