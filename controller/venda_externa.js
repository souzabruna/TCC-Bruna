var VendaExterna = require('../models/venda_externa.js');

//create
exports.create = function(req, res) {
  var carrinho = req.body.carrinho;
  var venCode = req.body.venCode;
  var vendedor = req.body.vendedor;
  var data = req.body.data;
  var cliente = req.body.cliente;
  var newVendaExterna = new VendaExterna({vendedor: vendedor, data: data, vendedorCode: venCode, cliente: cliente, produtos: carrinho});
    newVendaExterna.save(function (error, venda){
      var result  = '';
      if (error){
        result = "Erro ao inserir: " + error;
      }
      else{
        result = "venda inserida";
      }
      res.send(result);
    });
}

//list
exports.list = function(req, res) {
	VendaExterna.find(function(error,vendas){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = vendas;
    }
    res.send(result);
  });
}

//read one
exports.read_one = function(req, res) {
	var id = req.param('id');
  VendaExterna.find({ _id: id},function(error,comissoes){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = comissoes[0];
    }
    res.send(result);
  });
}

//delete
exports.delete = function(req, res) {
	var id = req.param('id');
  VendaExterna.deleteOne({ _id: id},function(error){
    var result = '';
    if (error){
      result = "Erro ao Deletar: " + error;
    }
    else{
      result = "Deletado com sucesso!";
    }
    res.send(result);
  });
}

//delete get
exports.delete_get = function(req, res) {
	var id = req.param('code');
  VendaExterna.deleteOne({ _id: id},function(error){
    var result = '';
    if (error){
      result = "Erro ao Deletar: " + error;
    }
    else{
      result = "Deletado com sucesso!";
    }
    res.send(result);
  });
}