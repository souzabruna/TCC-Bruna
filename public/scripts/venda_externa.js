$(document).ready(function(){
    var carrinho = new Array();
    $('.prodVenda').hide();
    $('#btn-adicionar').click(function(e) {
        e.preventDefault();
        var code = $('#produto').val();
        var i;
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
                    carrinho.push(data);
                }
                else {
                    $('#modprod').toggle('is-toggle');
                }
            }else {
                $('#modprodIn').toggle('is-toggle');
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
    });

    $('#btn-enviar').click(function(e){
        var vendedor = $('#name').val();
        var ven = $('#vendedor').val();
        var venCode = ven.toString();
        var data = $('#data').val();
        var cliente = $('#cliente').val();
        e.preventDefault();

        $.ajax({
            method: "POST",
            dataType: "json",
            url: "/api/venda_externa/new/",
            data: { 'carrinho': carrinho, 'venCode': venCode, 'vendedor': vendedor, 'data': data, 'cliente': cliente}
        }).done(function(data){
            $('#modsus').toggle('is-toggle');
        });
    });     
});

$('.btpro').click(function(){
    $('#modprod').toggle('is-toggle');
});

$('.btprosus').click(function(){
    $('#modsus').toggle('is-toggle');
    window.location.assign("http://localhost:3000/public/dashboard.html");
});

$('.cancel').click(function(){
    window.location.assign("http://localhost:3000/public/dashboard.html");
});