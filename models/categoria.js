var mongoose = require('mongoose');

var categoriaSchema = mongoose.Schema({
	code: Number,
    name: String,
});
var Categoria = mongoose.model('Categoria', categoriaSchema);
module.exports = Categoria;