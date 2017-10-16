var Cliente= require('../models/cliente.js');

// CREATE 
exports.create = function(req, res) {
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
}

//list
exports.list = function(req, res) {
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
}

//delete
exports.delete = function(req, res) {
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
}

//update
exports.update = function(req, res) {
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
}
