var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 4);

var vendaSchema = mongoose.Schema({
    vendedor: String,
    produto: [],
    pagamento: String,
    valor: { type: Float },
    data: String,
    
});
var Venda = mongoose.model('Venda', vendaSchema);
module.exports = Venda;