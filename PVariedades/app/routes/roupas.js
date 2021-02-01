module.exports = function (application) {
	application.get('/masculino', function (req, res) {
		application.app.controllers.roupas.roupasM(application, req, res);
    });

    application.get('/tenis', function (req, res) {
		application.app.controllers.roupas.tenis(application, req, res);
    });
    
    

}