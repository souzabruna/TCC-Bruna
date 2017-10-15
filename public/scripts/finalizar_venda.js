var valorAntigo;
var vend;
var carrinho = new Array();

$(document).ready(function(){
    var total =0;
    var carrinho = new Array();
    $('.prodVenda').hide();

    $('#btn-adicionar').click(function(e) {
        e.preventDefault();
        var code = $('#produto').val();
        console.log(code);
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/api/product/"+code
        }).done(function(data){
            $('.prodVenda').last().clone().appendTo('#ColumnVenda').show();
            var divProd = $('.prodVenda').last();
            $(divProd).find('.name span').html(data.name);
            data.qtdVenda = $('#qtd').val();
            carrinho.push(data);
        });

    });

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var id = getUrlParameter('code');
  
    $(document).ready(function(){
        $.ajax({
             type: "GET",
             dataType: "json",
             url: "/api/venda_externa/"+id
        }).done(function(data){
             $('#vendedor').val(data.vendedorCode);
             $('#data').val(data.data);
             $('#cliente').val(data.cliente);
             $('#endereco').val(data.endereco);
             $('#ven').val(data.vendedorCode);
             vend = data.vendedorCode;
             $.ajax({
                  type: "GET",
                  dataType: "json",
                  url: "/api/comissao/"+vend
             }).done(function(data){
                  valorAntigo =data.valor;
             });
            var i;
            for(i=0; i < data.produtos.length ; i++){
                $('.prodVenda').last().clone().appendTo('#ColumnVenda').show();
                    var divProd = $('.prodVenda').last();
                    $(divProd).find('.name span').html(data.produtos[i].name);
                    $(divProd).find('.preco span').html(data.produtos[i].price);
                    var preco = data.produtos[i].price;
                    carrinho.push(data.produtos[i]);
                    total= total + preco;
                    $('#valor').val(total);
                    data.qtdVenda = $('#qtd').val();
                    carrinho.push(data);
                    return carrinho;
            }
        });//FIM DO AJAX
    });

    $('.BtnDelete').click(function(){
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
       };
      var id = getUrlParameter('code');
      $.ajax({
          type: "DELETE",
          dataType: "text",
          url: "/api/venda_externa/"+id
      }).done(function(data){
          if(data === "Deletado com sucesso!"){
              $('#modsusDel').toggle('is-toggle');
          }
      });//FIM DO AJAX
    });

    $('#btnEnviarV').click(function(e){
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
            $('#modsus').toggle('is-toggle');

        });

        var id = getUrlParameter('code');
        $.ajax({
            type: "DELETE",
            dataType: "text",
            url: "/api/venda_externa/"+id
        }).done(function(data){
            if(data === "Deletado com sucesso!"){
                $('#modsus').toggle('is-toggle');
            }
        });
      
    });

 });

$('.bts').click(function(){
    $('#modsus').toggle('is-toggle');
    window.location.assign("http://localhost:3000/public/dashboard.html");
});

$('.btsDel').click(function(){
    $('#modsusDel').toggle('is-toggle');
    window.location.assign("http://localhost:3000/public/dashboard.html");
});