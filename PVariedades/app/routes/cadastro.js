module.exports = function (application) {
	application.get('/cadastro', function (req, res) {
		application.app.controllers.cadastro.cadastro(application, req, res);
	});

	application.post('/cadastrar', function (req, res) {
		application.app.controllers.cadastro.cadastrar(application, req, res);
	});

	application.get('/login', function (req, res) {
		application.app.controllers.cadastro.login(application, req, res);
	});

	application.post('/autenticar', function (req, res) {
		application.app.controllers.cadastro.autenticar(application, req, res);
	});

	application.get('/cart', function (req, res) {
		application.app.controllers.cadastro.cart(application, req, res);
	});

	application.get('/senha', function (req, res) {
		application.app.controllers.cadastro.senha(application, req, res);
	});
}