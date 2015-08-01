module.exports = function(app, mongoose, db){
	// console.log('rest api running');
	require('./login/index')(app, mongoose, db);

}