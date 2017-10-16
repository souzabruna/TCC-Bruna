var valorAntigo;
var total = 0;
$(document).ready(function(){
    var carrinho = new Array();
    $('.prodVenda').hide();
    $('#btn-adicionar').click(function(e) {
        e.preventDefault();
        var code = $('#produto').val();
        var i;
        console.log(code);
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/api/product/"+code
        }).done(function(data){
              data.qtdVenda = $('#qtd').val();
              var Achou = false;
              for(i = 0; i < carrinho.length; i++) {
                  if(carrinho[i].code === data.code){
                      Achou = true;
                  }
              }
              if(!Achou){
                  if(data.quantidade > data.qtdVenda){
                      $('.prodVenda').last().clone().appendTo('#ColumnVenda').show();
                      var divProd = $('.prodVenda').last();
                      $(divProd).find('.name span').html(data.name);
                      $(divProd).find('.preco span').html(data.price);
                      total = total + (data.price * qtdVenda);
                      $('#valor').val(total);  
                      carrinho.push(data);
                  }
                  else {
                      $('#modprod').toggle('is-toggle');
                  }
              }else {
                  $('#modprodin').toggle('is-toggle');
              }
        });
    });

    $('#btn-vend').click(function(e) {
        e.preventDefault();
        var vendedor = $('#vendedor').val();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/api/user/"+vendedor
        }).done(function(data){
            $('#name').val(data.name);
        });
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/api/comissao/"+vendedor
        }).done(function(data){
            valorAntigo =data.valor;
        });
    });

    $('#btn-enviar').click(function(e){
        var vendedor = $('#name').val();
        var ven = $('#vendedor').val();
        var venCode = ven.toString();
        var valor = $('#valor').val();
        var acrescimo = valor * 0.1;
        var comissao = valorAntigo + acrescimo;
        var dia = $('#dia').val();
        var pagamento = $('#pagamento').val();
        e.preventDefault();
        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/api/venda/new/",
            data: { 'carrinho': carrinho, 'vendedor': vendedor, 'valor': valor, 'venCode': venCode, 'comissao': comissao, 'dia': dia, 'pagamento': pagamento}
        }).done(function(data){
            console.log(data);
        });
    });
});

$('.bts').click(function(){
    $('#modsus').toggle('is-toggle');
});

$('.btpro').click(function(){
    $('#modprod').toggle('is-toggle');
});

$('.cancel').click(function(){
    window.location.assign("http://localhost:3000/public/dashboard.html");
});

$('.btproin').click(function(){
    $('#modprodin').toggle('is-toggle');
});