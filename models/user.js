var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	code: Number,
    name: String,
});
var User = mongoose.model('User', userSchema);
module.exports = User;