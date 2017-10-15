$(document).ready(function(){
    $("#CardProduct").hide();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/api/fornecedor/"
    }).done(function(data){
        $.each(data,function(index, obj){
            $('#CardProduct').clone().appendTo('.SectionProducts');
            var divProduct = $('#CardProduct').last();
            divProduct.attr('id',obj['code']);
            divProduct.find('.name span').html(obj['name']);
            divProduct.find('.cnpj span').html(obj['cnpj']);
            divProduct.find('.telefone span').html(obj['telefone']);
            divProduct.show();
        });//FIM DO AJAX

        $('.BtnDelete').click(function(){
            var code = $(this).parents('.Product').attr('id');
            var div = $(this).parents('.Product');
            $.ajax({
                type: "DELETE",
                dataType: "text",
                url: "/api/fornecedor/"+code
            }).done(function(data){
                alert(data);
                if(data === "Deletado com sucesso!"){
                    div.hide();
                }
            });//FIM DO AJAX
        });
        
        $('.BtnEdit').click(function(){
            var code = $(this).parents('.Product').attr('id');
            var name = $(this).parents('.Product').find('.name span').html();
            var cnpj = $(this).parents('.Product').find('.cnpj span').html();
            var endereco = $(this).parents('.Product').find('.endereco span').html();
            window.location.assign("http://localhost:3000/public/atualizar_fornecedor.html?code="+code+"&name="+name+"&cnpj="+cnpj+"&endereco="+endereco);
        });
    });
});