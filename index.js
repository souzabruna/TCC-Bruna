var express = require('express');
var app = express();
var mongoose = require('mongoose');

var dbURL = process.env.MONGO_URL;

if(!dbURL){
  console.log("ERRO : Não foi encontrada a url do Mongo. \nDefina a variável MONGO_URL com a url");
  return;
}
//var dbURL = require('./config.js').db;

mongoose.connect(dbURL);


app.get('/', function (req, res) {
  res.send('<b>Hello World!</b>');

});
app.get('/xml/:id', function (req, res) {
  var id =  req.param('id');

  res.send('Teste XML: ' + id);
});

app.listen(3000, function () {
  console.log('WebService da Bruna rodando na porta 3000 =D');
});
