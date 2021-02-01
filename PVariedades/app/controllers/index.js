module.exports.index = function (application, req, res) {
    res.render('index', { validacao: {} });
}


module.exports.contato = function (application, req, res) {
    res.render('info/contato', { validacao: {} });
}

module.exports.promocoes = function (application, req, res) {
    res.render('roupas/promocoes', { validacao: {} });
}

module.exports.sobre = function (application, req, res) {
    res.render('info/sobre', { validacao: {} });
}
