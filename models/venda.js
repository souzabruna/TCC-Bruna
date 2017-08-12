var mongoose = require('mongoose');

var vendaSchema = mongoose.Schema({
	id: String,
    vendedor: String,
    produto: String,
    forma_pagamento: String,
    valor: String,
    data: String,
    
});
var Venda = mongoose.model('Venda', vendaSchema);
module.exports = Venda;