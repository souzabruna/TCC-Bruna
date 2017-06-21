var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: String,
    phone: String,
    adress: String
    burthday: String,
});
var Client = mongoose.model('Client', clientSchema);
module.exports = Client;
