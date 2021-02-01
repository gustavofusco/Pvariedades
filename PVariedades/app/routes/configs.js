module.exports = function (application) {
	application.get('/inserir', function (req, res) {
		application.app.controllers.configs.inserir(application, req, res);
    });

    application.get('/excluir', function (req, res) {
		application.app.controllers.configs.delete(application, req, res);
    });

    application.get('/painel', function (req, res) {
		application.app.controllers.configs.painel(application, req, res);
    });

    application.get('/vendidos', function (req, res) {
		application.app.controllers.configs.vendidos(application, req, res);
    });

    application.get('/historico', function (req, res) {
      application.app.controllers.configs.historico(application, req, res);
      });
    
    

}