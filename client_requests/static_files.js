var staticFilesFolder = 'public';

module.exports = function(app, express){
	// console.log('static files');
	app.use('/', express.static(staticFilesFolder));
}