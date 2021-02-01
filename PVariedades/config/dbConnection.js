//importar o mongo db
var mongo = require('mongodb');


//1- devolver os resultados do banco só quando necessário sua chamada
var connMongoDB = function () {
    var db = new mongo.Db(
        'pvariedades',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017,
            {}
        ),
        {}
    );//primeiro parametro é o nome do banco

    return db;
}


module.exports = function () {
    return connMongoDB; // 1-1
}