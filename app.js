
var serverPort = 8000;


(function(port){

var express = require('express');
var app = express();

//client requests
require('./client_requests/static_files')(app, express);
require('./client_requests/rest_api')(app, express);

//run app

app.listen(serverPort, function(){
	console.log('listening on port %s', serverPort);
})



})(serverPort);