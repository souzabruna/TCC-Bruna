var Fornecedor= require('../models/fornecedor.js');

// CREATE 
exports.create = function(req, res) {
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
}

//list
exports.list = function(req, res) {
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
}

//delete
exports.delete = function(req, res) {
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
}

//update
exports.update = function(req, res) {
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
}