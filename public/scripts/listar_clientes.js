$(document).ready(function(){
    $("#CardProduct").hide();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/api/cliente/"
    }).done(function(data){
        $.each(data,function(index, obj){
            $('#CardProduct').clone().appendTo('.SectionProducts');
            var divProduct = $('#CardProduct').last();
            divProduct.attr('id',obj['id']);
            divProduct.find('.nome span').html(obj['nome']);
            divProduct.find('.aniversario span').html(obj['aniversario']);
            divProduct.find('.endereco span').html(obj['endereco']);
            divProduct.show();
        });

        $('.BtnDelete').click(function(){
              var id = $(this).parents('.Product').attr('id');
              var div = $(this).parents('.Product');
              $.ajax({
                  type: "DELETE",
                  dataType: "text",
                  url: "/api/cliente/"+id
              }).done(function(data){
                  if(data === "Deletado com sucesso!"){
                      alert(data);
                      div.hide();
                  }
              });//FIM DO AJAX
       });
        
       $('.BtnEdit').click(function(){
            var id = $(this).parents('.Product').attr('id');
            var nome = $(this).parents('.Product').find('.name span').html();
            var aniversario = $(this).parents('.Product').find('.aniversario span').html();
            var endereco = $(this).parents('.Product').find('.endereco span').html();
            window.location.assign("http://localhost:3000/public/atualizar_cliente.html?id="+id+"&nome="+nome+"&aniversario="+aniversario+"&endereco="+endereco);
        });
    });
});