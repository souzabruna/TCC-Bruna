var mongoose = require('mongoose');

var vendaExternaSchema = mongoose.Schema({
	vendedorCode: String,
	vendedor: String,
    cliente: String,
    data: String,
    endereco: String,
    produtos: [],
    
});
var VendaExterna = mongoose.model('VendaExterna', vendaExternaSchema);
module.exports = VendaExterna;