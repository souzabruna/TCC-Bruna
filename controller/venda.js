var Venda= require('../models/venda.js');

//create
exports.create = function(req, res) {
  var carrinho = req.body.carrinho;
  var vendedor = req.body.vendedor;
  var venValue = req.body.valor;
  var venCode = req.body.venCode;
  var comissao = req.body.comissao;
  var pagamento = req.body.pagamento;
  var data = req.body.dia;
  var i;
  var quantidade;
  var quantidadeIncial;
  var quantidadeVend;
  var code;
  var newVenda = new Venda({vendedor: vendedor, valor: parseFloat(venValue), pagamento: pagamento, data: data, produto: carrinho});
  newVenda.save(function (error, categoria){
    var result  = '';
    if (error){
      result = "Erro ao inserir: " + error;
    }
    else{
      result = "Categoria inserida: ";
    }
  });

 Comissao.update({ vendedor: venCode},{valor: parseFloat(comissao)}, function(error){
    var result = '';
    if (error){
      result = "Erro ao Atualizar: " + error;
    }
    else{
      result = " Comissao Atualizado com sucesso!";
    }
    return result
  });

  for(i = 0; i < carrinho.length; i++) { 
    quantidadeIncial = carrinho[i].quantidade;
    quantidadeVend = carrinho[i].qtdVenda;
    quantidade = quantidadeIncial - quantidadeVend;
    code = carrinho[i].code;
    Product.update({ code: code},{quantidade: quantidade}, function(error){
      var result = '';
      if (error){
        result = "Erro ao Atualizar: " + error;
      }
      else{
        result = "Atualizado com sucesso!";
      }
    });
   }
}

//list
exports.list = function(req, res) {
	Venda.find(function(error,vendas){
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