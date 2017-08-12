var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	code: Number,
    name: String,
    price: Number,
    quantidade: String,
    description: String,
});
var Product = mongoose.model('Product', productSchema);
module.exports = Product;
