var User= require('../models/user.js');

//create
exports.create = function(req, res) {
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
}

//list
exports.list = function(req, res) {
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
}

//update
exports.update = function(req, res) {
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
}

//read one
exports.read_one = function(req, res) {
  var code = req.param('code');
  User.find({ code: code},function(error,users){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = users[0];
    }
    res.send(result);
  });
}

//delete
exports.delete = function(req, res) {
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
}
