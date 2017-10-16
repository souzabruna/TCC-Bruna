$(document).ready(function(){
    $("#CardVenda").hide();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/api/venda_externa/"
    }).done(function(data){
        $.each(data,function(index, obj){
            $('#CardVenda').clone().appendTo('.CardContentV');
            var divVenda = $('#CardVenda').last();
            divVenda.attr('id',obj['_id']);
           	divVenda.find('.code span').html(obj['_id']).hide();
            divVenda.find('.vendedor span').html(obj['vendedor']);
            divVenda.find('.dia span').html(obj['data']);
            divVenda.show();
        });
    });

    $('.cardVenda').click(function(){
        var code = $(this).attr('id');
        window.location.assign("http://localhost:3000/public/finalizar_venda.html?code="+code);
    });
    $("#CardComi").hide();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/api/comissao/"
        }).done(function(data){
            $.each(data,function(index, obj){
               $('#CardComi').clone().appendTo('.CardComi');
               var divComi = $('#CardComi').last();
               divComi.find('.vendedor span').html(obj['vendedorName']);
               divComi.find('.valor span').html(obj['valor']);
               divComi.show();
            });
        });//FIM DO AJAX
});