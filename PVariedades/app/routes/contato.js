module.exports = function (application) {
	application.get('/contato', function (req, res) {
		application.app.controllers.index.contato(application, req, res);
	});

}