var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Product = require('./models/product.js');
var User= require('./models/user.js');
var Categoria= require('./models/categoria.js');
var Cliente= require('./models/cliente.js');
var Comissao= require('./models/comissao.js');
var Venda= require('./models/venda.js');
var Fornecedor= require('./models/fornecedor.js');
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
app.get('/api/product/new/:code/:name/:price/:description/:quantidade', function (req, res) {
  var code =  req.param('code');
  var name =  req.param('name');
  var price = req.param('price');
  var description =  req.param('description');
   var quantidade =  req.param('quantidade');
  var newPoduct = new Product({code: parseInt(code), name: name, price: parseInt(price), description: description, quantidade: quantidade});
  newPoduct.save(function (error, prod) {
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Produto inserido";
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
app.put('/api/product/:code/:name/:price/:description', function (req, res) {
  var name =  req.param('name');
  var price = req.param('price');
  var code = req.param('code');
  var description = req.param('description');

  Product.update({ code: code},{name: name, price: price, description: description},function(error){
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
app.delete('/api/product/:code', function (req, res) {
  var code = req.param('code');
  Product.deleteOne({ code: code},function(error){
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

//user
//atualizar
app.put('/api/user/:code/:name', function (req, res) {
  var name =  req.param('name');
  var code = req.param('code');

  User.update({ code: code},{name: name}, function(error){
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
app.delete('/api/user/:code', function (req, res) {
  var code = req.param('code');
  User.deleteOne({ code: code},function(error){
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


//cliente
// CREATE
app.get('/api/cliente/new/:id/:nome/:aniversario/:email/:endereco/:telefone', function (req, res) {
  var id =  req.param('id');
  var nome =  req.param('nome');
  var aniversario =  req.param('aniversario');
  var email = req.param('email');
  var endereco =  req.param('endereco');
  var telefone =  req.param('telefone');
  var newCliente = new Cliente({id: id, nome: nome, aniversario: aniversario, email: email, endereco: endereco, telefone: telefone});
  newCliente.save(function (error, cliente) {
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Cliente inserido: " + cliente.nome;
    }
    res.send(result);
  });
});

//listar
app.get('/api/cliente/', function (req, res) {
  Cliente.find(function(error,clientes){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = clientes;
    }
    res.send(result);
  });
});

 //delete
app.delete('/api/cliente/:id', function (req, res) {
  var id = req.param('id');
  Cliente.deleteOne({ id: id},function(error){
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

// UPDATE
app.put('/api/cliente/:id/:nome/:aniversario/:endereco/:telefone/:email', function (req, res) {
  var nome =  req.param('nome');
  var aniversario = req.param('aniversario');
  var id = req.param('id');
  var endereco = req.param('endereco');
  var telefone = req.param('telefone');
  var email = req.param('email');

  Cliente.update({ id: id},{nome: nome, aniversario: aniversario, endereco: endereco, telefone: telefone, email: email},function(error){
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


//Fornecedor
// CREATE
app.get('/api/fornecedor/new/:code/:name/:cnpj/:endereco/:telefone/:email', function (req, res) {
  var code =  req.param('code');
  var name =  req.param('name');
  var cnpj =  req.param('cnpj');
  var endereco =  req.param('endereco');
  var telefone =  req.param('telefone');
  var email =  req.param('email');
  var newFornecedor = new Fornecedor({code: parseInt(code), name: name, cnpj: cnpj, endereco: endereco, telefone: telefone, email: email});
  newFornecedor.save(function (error, fornecedor) {
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Fornecedor inserido: " + fornecedor.name;
    }
    res.send(result);
  });
});


//fornecedor
//listar
// READ ALL
app.get('/api/fornecedor/', function (req, res) {
  Fornecedor.find(function(error,fornecedors){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = fornecedors;
    }
    res.send(result);
  });
});
//delete
app.delete('/api/fornecedor/:code', function (req, res) {
  var code = req.param('code');
  Fornecedor.deleteOne({ code: code},function(error){
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

// UPDATE
app.put('/api/fornecedor/:code/:name/:cnpj/:endereco/:telefone/:email', function (req, res) {
  var name =  req.param('name');
  var cnpj = req.param('cnpj');
  var code = req.param('code');
  var endereco = req.param('endereco');
  var telefone = req.param('telefone');
  var email = req.param('email');

  Fornecedor.update({ code: code},{name: name, cnpj: cnpj, endereco: endereco, telefone: telefone, email: email},function(error){
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

//Categoria
// CREATE
app.get('/api/categoria/new/:code/:name', function (req, res) {
  var code =  req.param('code');
  var name =  req.param('name');
  var newCategoria = new Categoria({code: parseInt(code), name: name});
  newCategoria.save(function (error, categoria){
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Categoria inserida: " + categoria.name;
    }
    res.send(result);
  });
});

// READ ALL
app.get('/api/categoria/', function (req, res) {
  Categoria.find(function(error,categorias){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = categorias;
    }
    res.send(result);
  });
});


//atualizar
app.put('/api/categoria/:code/:name', function (req, res) {
  var name =  req.param('name');
  var code = req.param('code');

  Categoria.update({ code: code},{name: name}, function(error){
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
app.delete('/api/categoria/:code', function (req, res) {
  var code = req.param('code');
  Categoria.deleteOne({ code: code},function(error){
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

//Comissao
// CREATE
app.get('/api/comissao/new/:vendedor/:valor', function (req, res) {
  var vendedor =  req.param('vendedor');
  var valor =  req.param('valor');
  var newComissao = new Comissao({vendedor: vendedor, valor: valor});
  newComissao.save(function (error, categoria){
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Categoria inserida: " + comissao.vendedor;
    }
    res.send(result);
  });
});

//Venda
// CREATE
app.get('/api/venda/new/:id/:vendedor/:produto/:forma_pagamento/:valor/:data', function (req, res) {
  var vendedor =  req.param('vendedor');
  var valor =  req.param('valor');
   var id =  req.param('id');
  var forma_pagamento =  req.param('forma_pagamento');
   var produto =  req.param('produto');
  var data =  req.param('data');
  var newVenda = new Venda({vendedor: vendedor, valor: valor, id: id, forma_pagamento: forma_pagamento, data: data, produto: produto});
  newVenda.save(function (error, venda){
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "venda inserida: " + venda.vendedor;
    }
    res.send(result);
  });
  Product.update({ code: produto},{quantidade: valor}, function(error){
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

// Start Server
app.listen(3000, function () {
  console.log('WebService da Bruna rodando na porta 3000 =D');
});
