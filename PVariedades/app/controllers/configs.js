module.exports.delete = function (application, req, res) {
    res.render('configs/excluir', { validacao: {} });
}

module.exports.inserir = function (application, req, res) {
    res.render('configs/inserir', { validacao: {} });
}

module.exports.vendidos = function (application, req, res) {
    res.render('configs/vendidos', { validacao: {} });
}

module.exports.painel = function (application, req, res) {
        res.render('usuario/painel');
    
}

module.exports.historico = function (application, req, res) {
    res.render('configs/historico');

}