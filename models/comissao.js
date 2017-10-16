var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 4);

var comissaoSchema = mongoose.Schema({
	vendedor: String,
	vendedorName: String,
    valor: { type: Float },
    
});
var Comissao = mongoose.model('Comissao', comissaoSchema);
module.exports = Comissao;