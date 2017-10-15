var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 4);

var productSchema = mongoose.Schema({
	code: Number,
    name: String,
    categoria: String,
    price: { type: Float },
    quantidade: String,
    description: String,
});
var Product = mongoose.model('Product', productSchema);
module.exports = Product;
