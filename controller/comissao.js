var Comissao= require('../models/comissao.js');

// CREATE 
exports.create = function(req, res) {
	var vendedor =  req.param('vendedor');
  var valor =  req.param('valor');
  var vendedorName =  req.param('vendedorName');
  var newComissao = new Comissao({vendedor: vendedor,vendedorName: vendedorName, valor: parseFloat(valor)});
  newComissao.save(function (error, categoria){
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Categoria inserida: ";
    }
    res.send(result);
  });
}

//list
exports.list = function(req, res) {
	Comissao.find(function(error,categorias){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = categorias;
    }
    res.send(result);
  });
}

//delete
exports.delete = function(req, res) {
	var vendedor= req.param('vendedor');
  Comissao.deleteOne({ vendedor: vendedor},function(error){
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

//read one
exports.read_one = function(req, res) {
	var vendedor = req.param('vendedor');
  Comissao.find({ vendedor: vendedor},function(error,comissoes){
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