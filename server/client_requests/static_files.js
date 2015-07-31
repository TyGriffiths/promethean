var staticFilesFolder = '../client'

module.exports = function(app, express){
	// console.log('static files');

	app.use('/', express.static(staticFilesFolder));
}