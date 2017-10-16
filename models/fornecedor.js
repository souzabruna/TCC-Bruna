var mongoose = require('mongoose');

var fornecedorSchema = mongoose.Schema({
	code: Number,
    name: String,
    cnpj: String,
    endereco: String,
    telefone: String,
    email: String,

});
var Fornnecedor = mongoose.model('Fornnecedor', fornecedorSchema);
module.exports = Fornnecedor;
