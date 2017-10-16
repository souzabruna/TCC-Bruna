var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Product = require('./models/product.js');
var User= require('./models/user.js');
var Client= require('./models/client.js');
var dbURL = "mongodb://easy_sale:Easybd@ds151951.mlab.com:51951/easy_sale";

// Testa variável de ambiente
if(!dbURL){
  console.log("ERRO : Não foi encontrada a url do Mongo. \nDefina a variável MONGO_URL com a url");
  return;
}
// Inicia conexão e exibe erros no console
mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use('/public', express.static(__dirname + '/public'));
// Páginal inicial
app.get('/', function (req, res) {
  res.send('<b>Hello World!</b>');
});
// Iníco Web Services

//Produto
// CREATE
app.get('/api/product/new/:code/:name/:price/:description', function (req, res) {
  var code =  req.param('code');
  var name =  req.param('name');
  var price = req.param('price');
  var description =  req.param('description');
  var newPoduct = new Product({code: parseInt(code), name: name, price: parseInt(price), description: description});
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
app.get('/api/product/', function (req, res) {
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
app.get('/api/product/:id', function (req, res) {
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
app.get('/api/product/update/:id/:name/:price', function (req, res) {
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
app.get('/api/product/delete/:code', function (req, res) {
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

//Usuário
// CREATE
app.get('/xml/user/new/:code/:name', function (req, res) {
  var code =  req.param('code');
  var name =  req.param('name');
  var newUser = new User({code: parseInt(code), name: name});
  newUser.save(function (error, user){
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Usuário inserido: " + user.name;
    }
    res.send(result);
  });
});

// READ ALL
app.get('/xml/user/', function (req, res) {
  User.find(function(error,users){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = users;
    }
    res.send(result);
  });
});


// READ ONE
app.get('/xml/user/:id', function (req, res) {
  var id = req.param('id');
  User.find({ _id: id},function(error,users){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = users[0];
    }
    res.send(result);
  });
});
// DELETE
app.get('/xml/user/delete/:id', function (req, res) {
  var id = req.param('id');
  User.deleteOne({ _id: id},function(error){
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

//CLIENTE
// CREATE
app.get('/xml/client/new/:name/:phone/:adress/:burthday', function (req, res) {
  var name =  req.param('name');
  var phone =  req.param('phone');
  var adress =  req.param('adress');
  var burthdayall =  req.param('burthday');
  var newClient = new Client({name: name, phone: phone, adress: adress, burthday: burthday});
  newClient.save(function (error, client){
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Cliente inserido: " + client.name;
    }
    res.send(result);
  });
});

// READ ALL
app.get('/xml/client/', function (req, res) {
  Client.find(function(error,clients){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = clients;
    }
    res.send(result);
  });
});


// READ ONE
app.get('/xml/client/:id', function (req, res) {
  var id = req.param('id');
  Client.find({ _id: id},function(error,clients){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = clients[0];
    }
    res.send(result);
  });
});
// DELETE
app.get('/xml/client/delete/:id', function (req, res) {
  var id = req.param('id');
  Client.deleteOne({ _id: id},function(error){
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
