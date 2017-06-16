var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	code: Number,
    name: String,
    price: Number,
    description: String
});
var Product = mongoose.model('Product', productSchema);
module.exports = Product;
