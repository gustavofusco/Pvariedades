module.exports.tenis = function (application, req, res) {
    res.render('roupas/tenis', { validacao: {} });
}

module.exports.roupasM = function (application, req, res) {
    res.render('roupas/masculino', { validacao: {} });
}
