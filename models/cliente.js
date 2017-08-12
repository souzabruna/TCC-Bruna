var mongoose = require('mongoose');

var clienteSchema = mongoose.Schema({
	id: String,
    nome: String,
    aniversario: String,
    email: String,
    endereco: String,
    telefone: String,
    
});
var Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;