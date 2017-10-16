var Product = require('../models/product.js');

//Produto
// CREATE 
exports.create = function(req, res) {
  var code =  req.body.code;
  var name =  req.body.name;
  var price = req.body.price;
  var description =  req.body.description;
  var quantidade =  req.body.quantidade;
  var categoria =  req.body.categoria;
  var newPoduct = new Product({code: parseInt(code), name: name, categoria: categoria, price: parseFloat(price), description: description, quantidade: quantidade});
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
};

// READ ALL
exports.product_list = function(req, res) {
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
};

// READ ONE
exports.read_one = function(req, res) {
	var code = req.param('code');
  Product.find({ code: code},function(error,product){
    var result = '';
    if (error){
      result = "Erro ao listar: " + error;
    }
    else{
      result = product[0];
    }
    res.send(result);
  });
};

//update
exports.update = function(req, res) {
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
}

//delete
exports.delete = function(req, res) {
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
}
