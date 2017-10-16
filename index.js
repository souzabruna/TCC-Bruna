var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
<<<<<<< HEAD
var Product = require('./models/product.js');
var User= require('./models/user.js');
var Client= require('./models/client.js');
var dbURL = "mongodb://easy_sale:Easybd@ds151951.mlab.com:51951/easy_sale";
=======
var dbURL = "mongodb://easy_sale:Easybd@ds151951.mlab.com:51951/easy_sale";
var product = require('./controller/product.js');
var user= require('./controller/user.js');
var categoria= require('./controller/categoria.js');
var cliente= require('./controller/cliente.js');
var fornecedor= require('./controller/fornecedor.js');
var comissao= require('./controller/comissao.js');
var venda= require('./controller/venda.js');
var venda_externa = require('./controller/venda_externa.js');
>>>>>>> 1dfc05f68bfc637e2f1bb00287248c4a2cdc72a9

// Testa variável de ambiente
if(!dbURL){
  console.log("ERRO : Não foi encontrada a url do Mongo. \nDefina a variável MONGO_URL com a url");
  return;
}
// Inicia conexão e exibe erros no console
mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/views'));



// Páginal inicial
app.get('/', function (req, res) {
  res.send('<b>Hello World!</b>');
});
// Iníco Web Service
//product
//CREATE
app.post('/api/prod/new/', product.create);

//LIST
app.get('/api/product', product.product_list);

//READ ONE 
app.get('/api/product/:code', product.read_one);

// UPDATE
app.put('/api/product/:code/:name/:price/:description', product.update);

// DELETE
app.delete('/api/product/:code', product.delete);

//Categoria
// CREATE
app.get('/api/categoria/new/:code/:name', categoria.create);

//List
app.get('/api/categoria/', categoria.list);

//atualizar
app.put('/api/categoria/:code/:name', categoria.update);

// READ ONE categoria
app.get('/api/product/cat/:categoria', categoria.read_one);

// DELETE
<<<<<<< HEAD
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
=======
app.delete('/api/categoria/:code', categoria.delete);
>>>>>>> 1dfc05f68bfc637e2f1bb00287248c4a2cdc72a9

//Usuário
// CREATE
app.get('/xml/user/new/:code/:name', user.create);

// READ ALL
app.get('/xml/user/', user.list);

//atualizar
app.put('/api/user/:code/:name', user.update);

// READ ONE
app.get('/api/user/:code', user.read_one);

// DELETE
app.delete('/api/user/:code', user.delete);

//cliente
// CREATE
app.get('/api/cliente/new/:id/:nome/:aniversario/:email/:endereco/:telefone', cliente.create);

//listar
app.get('/api/cliente/', cliente.list);

 //delete
app.delete('/api/cliente/:id', cliente.delete);

// UPDATE
app.put('/api/cliente/:id/:nome/:aniversario/:endereco/:telefone/:email', cliente.update);

//Fornecedor
// CREATE
app.get('/api/fornecedor/new/:code/:name/:cnpj/:endereco/:telefone/:email', fornecedor.create);

// READ ALL
app.get('/api/fornecedor/', fornecedor.list);

//delete
app.delete('/api/fornecedor/:code', fornecedor.delete);

// UPDATE
app.put('/api/fornecedor/:code/:name/:cnpj/:endereco/:telefone/:email', fornecedor.update);

//Comissao
// CREATE
app.get('/api/comissao/new/:vendedor/:vendedorName/:valor', comissao.create);

//list
app.get('/api/comissao/', comissao.list);

// DELETE
app.get('/api/comissao/delete/:vendedor', comissao.delete);

// READ ONE
app.get('/api/comissao/:vendedor', comissao.read_one);

//Venda
// CREATE
app.post('/api/venda/new', venda.create);

//listar todas
app.get('/api/venda/', venda.list);

//Venda externa
// CREATE
app.post('/api/venda_externa/new', venda_externa.create);

//listar todas
app.get('/api/venda_externa/', venda_externa.list);

//read one
app.get('/api/venda_externa/:id', venda_externa.read_one);

// DELETE get
app.get('/api/venda_externa/delete/:code', venda_externa.delete_get);

//delete
app.delete('/api/venda_externa/:id', venda_externa.delete);

// Start Server
app.listen(3000, function () {
  console.log('WebService da Bruna rodando na porta 3000 =D');
});
