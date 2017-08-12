var mongoose = require('mongoose');

var comissaoSchema = mongoose.Schema({
	vendedor: String,
    valor: String,
    
});
var Comissao = mongoose.model('Comissao', comissaoSchema);
module.exports = Comissao;