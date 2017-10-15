var Categoria = require('../models/categoria.js');

// CREATE 
exports.create = function(req, res) {
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
};

//list
exports.list = function(req, res) {
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
};

//update
exports.update = function(req, res) {
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
}

//read one
exports.read_one = function(req, res) {
		var categoria = req.param('categoria');
  Product.find({ categoria: categoria},function(error,products){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = products;
    }
    res.send(result);
  });
}

//delete
exports.delete = function(req, res) {
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
}