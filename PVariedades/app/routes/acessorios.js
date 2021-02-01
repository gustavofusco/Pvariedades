module.exports = function (application) {
	application.get('/acessorios', function (req, res) {
		application.app.controllers.acessorios.acessorios(application, req, res);
    });
    


}