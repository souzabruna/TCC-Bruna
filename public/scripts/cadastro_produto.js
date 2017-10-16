$('#cadastrar').click(function(e){
    var code = $('#code').val();
    var name = $('#name').val();
    var valor = $('#valor').val();
    var adicional = $('#adicional').val();
    var quantidade = $('#quantidade').val();
    var description = $('#descricao').val();
    var categoria = $('#categoria').val();
    var acrescimo = 1 + (adicional/100);
    var price = valor * acrescimo;
    $.ajax({
        method: "POST",
        dataType: "json",
        url: "/api/prod/new/",
        data: { 'code': code, 'name': name, 'price': price, 'quantidade': quantidade, 'descricao': description, 'categoria': categoria}
    }).done(function(data){
        $('#modsus').toggle('is-toggle');
    });
          
});      
        
$('.bt').click(function(){
    $('#modsus').toggle('is-toggle');
});