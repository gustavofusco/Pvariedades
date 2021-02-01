module.exports = function (application) {
	application.get('/sobre', function (req, res) {
		application.app.controllers.index.sobre(application, req, res);
	});

}