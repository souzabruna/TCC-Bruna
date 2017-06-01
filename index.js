var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Product = require('./models/product.js');
var dbURL = process.env.MONGO_URL;

// Testa variável de ambiente
if(!dbURL){
  console.log("ERRO : Não foi encontrada a url do Mongo. \nDefina a variável MONGO_URL com a url");
  return;
}
// Inicia conexão e exibe erros no console
mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Páginal inicial
app.get('/', function (req, res) {
  res.send('<b>Hello World!</b>');
});
// Iníco Web Services

// CREATE
app.get('/xml/product/new/:name/:price', function (req, res) {
  var name =  req.param('name');
  var price = req.param('price');
  var newPoduct = new Product({name: name, price: parseInt(price)});
  newPoduct.save(function (error, prod) {
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Produto inserido: " + prod.name;
    }
    res.send(result);
  });
});

// READ ALL
app.get('/xml/product/', function (req, res) {
  Product.find(function(error,products){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = products;
    }
    res.send(result);
  });
});

// READ ONE
app.get('/xml/product/:id', function (req, res) {
  var id = req.param('id');
  Product.find({ _id: id},function(error,product){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = product[0];
    }
    res.send(result);
  });
});

// UPDATE
app.get('/xml/product/update/:id/:name/:price', function (req, res) {
  var name =  req.param('name');
  var price = req.param('price');
  var id = req.param('id');

  Product.update({ _id: id},{name: name, price: price},function(error){
    var result = '';
    if (error){
      result = "Erro ao Atualizar: " + error;
    }
    else{
      result = "Atualizado com sucesso!";
    }
    res.send(result);
  });
});

// DELETE
app.get('/xml/product/delete/:id', function (req, res) {
  var id = req.param('id');
  Product.deleteOne({ _id: id},function(error){
    var result = '';
    if (error){
      result = "Erro ao Deletar: " + error;
    }
    else{
      result = "Deletado com sucesso!";
    }
    res.send(result);
  });
});

// Start Server
app.listen(3000, function () {
  console.log('WebService da Bruna rodando na porta 3000 =D');
});
