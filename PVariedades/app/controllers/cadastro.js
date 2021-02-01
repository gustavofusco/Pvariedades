module.exports.cadastro = function (application, req, res) {
    res.render('usuario/cadastro', {dadosForm: {} });
}

module.exports.cadastrar = function (application, req, res) {

    var dadosForm = req.body;

   

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    var JogoDAO = new application.app.models.JogoDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);
    JogoDAO.gerarParametros(dadosForm.usuario, req);

    res.redirect('/');

}

module.exports.login = function (application, req, res) {
    res.render('usuario/login');
}

module.exports.cart = function (application, req, res) {
    res.render('usuario/cart');
}

module.exports.senha = function (application, req, res) {
    res.render('usuario/senha');
}

module.exports.autenticar = function (application, req, res) {

    var dadosForm = req.body;

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.autenticar(dadosForm, req, res);

}